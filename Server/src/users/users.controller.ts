import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post('register')
    async register(
      @Body('name') name: string,
      @Body('username') username: string,
      @Body('password') password: string,
    ) 
    {
      const user = await this.usersService.register(
        name,
        username,
        password,
      );

    return {user}
    }


  
    @Get()
    getAllUsers() {
      return this.usersService.getAllUsers();
    }
  }