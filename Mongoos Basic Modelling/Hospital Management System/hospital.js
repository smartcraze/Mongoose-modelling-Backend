import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    address:{
        type: String ,
        required:true
    },
    city: { 
            type: String 
    },
    state: {
        type: String 
    },
    PinCode: {
        type: String 
    },
    phoneNumber: { 
        type: String
    },
    email: { 
        type: String 
    },
},{timestamps:true});

export const  Hospital = mongoose.model("Hospital", medicalSchema);