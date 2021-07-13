import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://sejal:hello@todo.66g0y.mongodb.net/todo?retryWrites=true&w=majority',
      { useFindAndModify: false }
    ),
    TodoModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}