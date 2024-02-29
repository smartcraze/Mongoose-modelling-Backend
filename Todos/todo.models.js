import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content:{
        type:string,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,  //reference to user model
        ref:"User"                           //name of the collection in which it is referenced

    },
    subTodo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ]// array of sub-todos
},{timestamps:true});
export const  Todo= mongoose.model( 'Todo',todoSchema);
