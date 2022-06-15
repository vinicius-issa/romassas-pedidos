export interface SsoDatasource {
  sendPhoneNumber: (phoneNumber: string) => Promise<void>;
  sendPhoneCode: (code: number) => Promise<number>;
}
