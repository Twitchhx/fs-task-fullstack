import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  private user: any;

  constructor() {
    this.loadUserData();
  }

  private loadUserData() {
    const filePath = path.resolve(__dirname, '../../User.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedContent = JSON.parse(fileContent);
    this.user = parsedContent.data.user;
  }

  private saveUserData() {
    const filePath = path.resolve(__dirname, '../../User.json');
    const updatedData = {
      data: {
        user: this.user,
      },
    };

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
  }

  findUserById(id: number) {
    if (id === 1) return this.user;
    else throw new Error(`User with ID ${id} not found.`);
  }

  async updateUser(id: number, updateInput: UpdateUserInput) {
    if (id === 1) {
      this.user = _.merge(this.user, updateInput);
      this.saveUserData();
      return this.user;
    } else {
      throw new Error(`User with ID ${id} not found.`);
    }
  }
}
