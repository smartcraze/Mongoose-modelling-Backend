import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    salary: { type: String, required: true },
    qualification: { type: String, required: true },
    experienceInYear: { type: Number, required: true },
    specialization: { type: String, required: true },
    worksInHospital: [
      {
        type: mongoose.schema.Types.ObjectId,
        ref: "Medical",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", medicalSchema);
