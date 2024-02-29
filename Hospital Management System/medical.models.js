import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({},{timestamps:true});

export const  MedicalRecords = mongoose.model("MedicalRecords", medicalSchema);