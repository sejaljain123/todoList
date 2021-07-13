import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import {TodoSchema} from "./todo.model"
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    AuthModule
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
