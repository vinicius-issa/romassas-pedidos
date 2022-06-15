import React, { createContext, useMemo, useState } from "react";

import { User } from "../domain/entities";
import { SsoDatasource } from "../interface/sso-datasource";

type TAuthProviderProps = {
  children?: React.ReactNode;
  ssoDatasource: SsoDatasource;
};

export type TAuthProviderState = {
  isLogged: boolean;
  authenticate: (uuid: string) => Promise<void>;
  getUser: () => User | undefined;
  logoff: () => void;
  sendPhoneNumber: (phoneNumber: string) => Promise<void>;
  sendPhoneCode: (code: number) => Promise<number>;
};

const SOME_NUMBER = 10;

const INITIAL_STATE = {
  isLogged: false,
  authenticate: async (uuid: string) => {},
  getUser: () => undefined,
  logoff: () => {},
  sendPhoneNumber: async (phoneNumber: string) => {},
  sendPhoneCode: async (code: number) => SOME_NUMBER
};

export const AuthContext = createContext<TAuthProviderState>(INITIAL_STATE);

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>();

  const isLogged = useMemo(() => !!user, [user]);

  const getUser = () => user;

  const logoff = () => {
    setUser(undefined);
  };

  const authenticate = async (uuid: string) => {
    setUser({
      name: "User Mock",
      phone: "123456",
      role: [],
      address: {
        cep: "14654-123",
        state: "SP",
        city: "Some City",
        number: "43",
        street: "Some street"
      }
    });
  };

  const sendPhoneNumber = async (phoneNumber: string) => {};

  const sendPhoneCode = async (code: number) => SOME_NUMBER;

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        getUser,
        logoff,
        authenticate,
        sendPhoneCode,
        sendPhoneNumber
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
