import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}


    async create(todo: Todo,token:any): Promise<{}> {
        try{
     const todos =   new this.todoModel(
         {
         label:todo.label,
         description:todo.description,
         complete:todo.complete,
         user:token.username
         }
     );
     await todos.save();
     console.log(todos.user);
      return{
        message:"Added Item in Todo",
        todo:todo
      } 
 }
 catch(err){
     console.log(err);
 }
}

    async view(token:any) : Promise<{}>{
        try{
        return await this.todoModel.find({user:token.username});
        }
        catch(err) {console.log(err)}
    }
   
    async update(id:string , todo:Todo,token:any):Promise<{}>{
        try{
       const todoitem:any= await this.todoModel.findById({_id:id});
        if(todoitem.user===token.username){
           todoitem.label=todo.label;
           todoitem.description=todo.description;
           todoitem.complete=todo.complete;
                  await todoitem.save(); 
                  return {
                    message:"Todo Updated",
                    todo:todo
                   }
        }
        else{
            return{
                message:"unauthorized"
            }
        }
    }catch(err){
        console.log(err)
    }
      
    }
    
    async delete(todo:Todo,token:any):Promise<{}>{
        try{
        let todoitem:any = await this.todoModel.findById({_id:todo.id})
        console.log(todoitem.user);
        if(todoitem){
        if(token.username===todoitem.user){
            await this.todoModel.deleteOne(todoitem);
            return{
                message:"Deleted Item from Todo",
                todo:todo
            }
        }
        else{
            return{message:"unauthorized"}
    }
}
        else{
            return {message:"item does not exist"}
        }
}
    catch(err){
        console.log(err)
    }
}

async detail (todo:Todo):Promise<{}>{
    try{
    return await this.todoModel.findById({_id:todo.id});
    }
    catch(err){
        console.log(err);
    }
}


async complete(id:string , todo:Todo,token:any):Promise<{}>{
    try{
    const todoitem:any= await this.todoModel.findById({_id:id});
     if(todoitem.user===token.username){
        todoitem.complete=todo.complete;
               await todoitem.save(); 
               return {
                 message:"Todo Updated",
                 todo:todo
                }
     }
     else{
         return{
             message:"unauthorized"
         }
     }
   
    }

catch(err){
    console.log(err)
}
}
}