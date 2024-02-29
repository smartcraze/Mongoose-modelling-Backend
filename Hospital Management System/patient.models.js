import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({},{timestamps:true});

export const  Patient = mongoose.model("Patient", medicalSchema);