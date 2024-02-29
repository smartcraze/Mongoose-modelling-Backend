import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your full name"]
    },
    TreatmentWith:{
        type: string,
        required:true
    },
    address:{
        type:string,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:string,
        required:true,
    },
    gender:{
        type:string,
        enum:["Male","Female"],
        required:true
    },
    admitIn:{
        type: mongoose.Schema.Types.ObjectId,  //referring to the
        ref:"Hospital"
    }

},{timestamps:true});

export const  Patient = mongoose.model("Patient", medicalSchema);