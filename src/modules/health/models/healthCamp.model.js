const mongoose = require("mongoose");

const healthCampSchema = new mongoose.Schema(
  {
    dateOfCamp: {
      type: Date,
      required: true,
    },
    targetGroup: {
      type: String,
      required: true,
    },
    location: {
      wardNo: {
        type: String,
        required: true,
      },
      habitation: {
        type: String,
        required: true,
      },
    },
    projectResponsible: {
      type: String,
      required: true,
    },
    medicineType: {
      type: String,
      required: true,
      enum: ["Allopathy", "Homeopathy", "Ayurvedic", "Others"],
    },
    specialisation: {
      type: String,
      required: true,
    },
    organiser: {
      type: String,
      required: true,
    },
    staffInvolved: {
      doctors: {
        type: Number,
        required: true,
        min: 0,
      },
      gda: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    totalBeneficiaries: {
      type: Number,
      required: true,
      min: 0,
    },
    majorFindings: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthCamp", healthCampSchema);
