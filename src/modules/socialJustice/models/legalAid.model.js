import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    month: { type: String, required: true }, // e.g., "Jan25", "Feb25"
    status: { type: String, default: "" }, // progress notes or updates
  },
  { _id: false }
);

const legalAidSchema = new mongoose.Schema(
  {
    // 🔹 Basic Information
    householdCode: { type: String, required: true },
    uniqueId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    age: { type: Number, required: true },
    contactNo: { type: String },
    headOfHousehold: { type: String, required: true },
    wardNo: { type: String, required: true },
    habitation: { type: String },
    projectResponsible: { type: String },

    // 🔹 Reporting Details
    dateOfReporting: { type: Date, default: Date.now },
    reportedBy: { type: String },

    // 🔹 Intervention Plan
    natureOfIssue: { type: String, required: true },
    actionPlan: { type: String },

    // 🔹 Progress Reporting (Monthly)
    progress: [progressSchema],

    // 🔹 Photo
    photoUrl: { type: String }, // can be a file path or cloud URL
  },
  { timestamps: true }
);

const LegalAid = mongoose.model("LegalAid", legalAidSchema);

export default LegalAid;
