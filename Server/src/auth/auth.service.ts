import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor( private usersService: UsersService,private jwtService: JwtService){}

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(username);
      if(user){
        const cmp = bcrypt.compare(pass,user.password)
        if(cmp){
            return user;
        }
      }
      return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
          success:"true",
        };
      }
}

