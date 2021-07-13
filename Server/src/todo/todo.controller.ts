import { Controller, Get,Post,Body,Put, Delete,UseGuards ,Req, Param} from '@nestjs/common';
import { TodoService } from './todo.service';
import {Todo} from "./todo.model"
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('todo')
export class TodoController {
    constructor(private readonly jwtService :JwtService, private readonly todoService: TodoService) {}

    @UseGuards(JwtAuthGuard)
    @Get('view')
    async view(@Req () request:any) : Promise<{}>{
       const jwt = request.headers['authorization'].replace('Bearer',' ').trim();
       const token:any = this.jwtService.decode(jwt);
        console.log(token.username)
       return await this.todoService.view(token);
    } 

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() todo: Todo ,@Req () request:any): Promise<{}> {

       const jwt = request.headers['authorization'].replace('Bearer',' ').trim();
       const token:any = this.jwtService.decode(jwt);
  
       return await this.todoService.create(todo,token);
    }

    @UseGuards(JwtAuthGuard)
    @Put('update/:id')
    async update(@Param('id') id:string ,@Body() todo:Todo,@Req () request:any):Promise<{}>{
        const jwt = request.headers['authorization'].replace('Bearer',' ').trim();
        const token:any = this.jwtService.decode(jwt);
        return await this.todoService.update(id,todo,token);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(@Param() todo:Todo, @Req () request:any):Promise<{}>{
        const jwt = request.headers['authorization'].replace('Bearer',' ').trim();
        const token:any = this.jwtService.decode(jwt)
        // console.log(token);
        return await this.todoService.delete(todo,token);
    }

    @UseGuards(JwtAuthGuard)
    @Get('view/:id')
    async detail(@Param() todo:Todo):Promise<{}>{
        return await this.todoService.detail(todo);
    }

    @UseGuards(JwtAuthGuard)
    @Put('complete/:id')
    async complete(@Param('id') id:string ,@Body() todo:Todo,@Req () request:any):Promise<{}>{
        const jwt = request.headers['authorization'].replace('Bearer',' ').trim();
        const token:any = this.jwtService.decode(jwt);
        return await this.todoService.complete(id,todo,token);
    }
}
