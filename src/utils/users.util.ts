import * as fs from 'fs';

export interface User {
  name: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

class UsersHelper {
  static users;
  // todo do we need to parametrize this?
  static readonly filePath = 'users.json';

  static load() {
    if (typeof UsersHelper.users == 'undefined') {
      let rawData;
      try {
        rawData = fs.readFileSync(UsersHelper.filePath);
      } catch (e) {
        throw new Error(`Reading users file exception: ${e.message}.`);
      }
      UsersHelper.users = JSON.parse(rawData);
    }
    return UsersHelper.users;
  }
}

export const users = UsersHelper.load() as { [key: string]: User };
