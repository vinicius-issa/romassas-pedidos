import { UnauthorizedError } from "../../shared/error";
import { User } from "../domain/entities";
import { SsoDatasource } from "../interface/sso-datasource";

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

export class MockSsoDatasource implements SsoDatasource {
  private readonly FAKE_CODE = 1324;
  private readonly FAKE_UUID = "36564136873651132";

  async sendPhoneCode(code: number): Promise<string> {
    await sleep(1000);
    if (code !== this.FAKE_CODE) throw new UnauthorizedError();
    return this.FAKE_UUID;
  }

  async sendPhoneNumber(phoneNumber: string): Promise<void> {
    await sleep(1000);
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
