import { setTimeout } from "timers/promises";
import { UnauthorizedError } from "../../shared/error";
import { User } from "../domain/entities";
import { SsoDatasource } from "../interface/sso-datasource";

export class MockSsoDatasource implements SsoDatasource {
  private readonly FAKE_CODE = 1324;
  private readonly FAKE_UUID = "36564136873651132";

  async sendPhoneCode(code: number): Promise<string> {
    await setTimeout(1000, undefined);
    if (code !== this.FAKE_CODE) throw new UnauthorizedError();
    return this.FAKE_UUID;
  }

  async sendPhoneNumber(phoneNumber: string): Promise<void> {
    await setTimeout(1000, undefined);
  }

  async getUser(uuid: string): Promise<User> {
    return {
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
    };
  }
}
