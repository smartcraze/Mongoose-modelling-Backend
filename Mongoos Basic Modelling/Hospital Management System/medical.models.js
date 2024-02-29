import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false},
    date: {type: Date, default: Date.now()},

},{timestamps:true});

export const  MedicalRecords = mongoose.model("MedicalRecords", medicalSchema);