import { User } from "../domain/entities";

export interface SsoDatasource {
  sendPhoneNumber: (phoneNumber: string) => Promise<void>;
  sendPhoneCode: (code: number) => Promise<string>;
  getUser: (uuid: string) => Promise<User>;
}
