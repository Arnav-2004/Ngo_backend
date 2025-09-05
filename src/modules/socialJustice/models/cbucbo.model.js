import mongoose from "mongoose";

const cbucboSchema = new mongoose.Schema(
  {
    // Basic Information
    basicInfo: {
      groupId: { type: String, required: true, unique: true, trim: true },
      groupName: { type: String, required: true, trim: true },
      functionalArea: { type: String, trim: true },
      groupType: { type: String, trim: true },
      wardNo: { type: String, trim: true },
      habitation: { type: String, trim: true },
      projectResponsible: { type: String, trim: true },
      dateOfFormation: { type: Date },
      totalMembers: { type: Number, min: 0 },
      groupLeader: { type: String, trim: true },
      contactNo: { type: String, trim: true },
      groupMentor: { type: String, trim: true },
    },

    // Action Planning through Capacity Building Trainings
    capacityBuilding: {
      trainingsAttended: { type: [String], default: [] },
      trainingOutcomes: { type: String, trim: true },
      actionPlan: { type: String, trim: true },
    },

    // Progress Reporting (FY 2025–26)
    progressReporting: {
      remarks: { type: String, trim: true },

      // Monthly reports
      monthly: {
        jan25: { type: String, trim: true },
        feb25: { type: String, trim: true },
        mar25: { type: String, trim: true },
        apr25: { type: String, trim: true },
        may25: { type: String, trim: true },
        jun25: { type: String, trim: true },
        jul25: { type: String, trim: true },
        aug25: { type: String, trim: true },
        sep25: { type: String, trim: true },
        oct25: { type: String, trim: true },
        nov25: { type: String, trim: true },
        dec25: { type: String, trim: true },
        jan26: { type: String, trim: true },
        feb26: { type: String, trim: true },
        mar26: { type: String, trim: true },
      },

      majorAchievements: { type: String, trim: true },
    },

    // Photo Documentation
    photoDocumentation: {
      before: { type: String, trim: true },
      intermediate: { type: String, trim: true },
      after: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model("CBUCBO", cbucboSchema);
