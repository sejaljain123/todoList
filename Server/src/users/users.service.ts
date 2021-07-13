import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /**
   * Create One User
   *
   * @param name
   * @param username
   * @param password
   */
  async register(name: string, username: string, password: string) {
    try{
    const user = await this.userModel.findOne({username});
    if (!user){
    const hash = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      name:name,
      username:username,
      password:hash,
    });
    const result = await newUser.save();
    return result;
    }
    else{
      return "user already exists"
    }
    }
    catch(err){
      console.log(err);
    }
}
async findOne(username:string){
  const user = await this.userModel.findOne({username})
  return user;
}

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password
    }));
  }

}