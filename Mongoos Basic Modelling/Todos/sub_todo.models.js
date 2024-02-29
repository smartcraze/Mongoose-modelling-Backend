import mongoose, { mongo } from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{timestamps:true});
export const Todo = mongoose.model("Todo",subTodoSchema);