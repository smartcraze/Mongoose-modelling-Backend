import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({},{timestamps:true});
export const Registration = mongoose.model("Registration",registrationSchema);