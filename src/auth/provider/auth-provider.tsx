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
  sendPhoneCode: (code: number) => Promise<string>;
  loading: boolean;
};

const SOME_STRING = "ABcd10";

const INITIAL_STATE = {
  isLogged: false,
  authenticate: async (uuid: string) => {},
  getUser: () => undefined,
  logoff: () => {},
  sendPhoneNumber: async (phoneNumber: string) => {},
  sendPhoneCode: async (code: number) => SOME_STRING,
  loading: false
};

export const AuthContext = createContext<TAuthProviderState>(INITIAL_STATE);

const AuthProvider = ({ children, ssoDatasource }: TAuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const isLogged = useMemo(() => !!user, [user]);

  const getUser = () => user;

  const logoff = () => {
    setUser(undefined);
  };

  const authenticate = async (uuid: string) => {
    setLoading(true);
    const user = await ssoDatasource.getUser(uuid);
    setUser(user);
    setLoading(false);
  };

  const sendPhoneNumber = async (phoneNumber: string): Promise<void> => {
    setLoading(true);
    await ssoDatasource.sendPhoneNumber(phoneNumber).finally(() => {
      setLoading(false);
    });
  };

  const sendPhoneCode = async (code: number): Promise<string> => {
    setLoading(true);
    return await ssoDatasource.sendPhoneCode(code).finally(() => {
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        getUser,
        logoff,
        authenticate,
        sendPhoneCode,
        sendPhoneNumber,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
