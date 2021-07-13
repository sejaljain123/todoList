import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({

  label: {type: String, required: true },
  description: { type: String},
  complete:{type:Boolean, default:false,required:false},
  user:{type: mongoose.Schema.Types.String, ref: 'User',required:true },
  date:{type:Date , default:Date.now()}
});

export interface Todo extends mongoose.Document {

    label: string
    description: string
    complete:boolean
    user:mongoose.Schema.Types.String
    date:string
}
