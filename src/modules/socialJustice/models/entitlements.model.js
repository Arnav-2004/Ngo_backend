const mongoose = require("mongoose");

const entitlementSchema = new mongoose.Schema(
  {
    // Basic Info
    basicInfo: {
      householdCode: {
        type: String,
        required: true,
      },
      idCode: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
      },
      age: {
        type: Number,
        required: true,
        min: 0,
      },
      headOfHousehold: {
        type: String,
        required: true,
      },
      contactNo: {
        type: String,
        required: false,
      },
      wardNo: {
        type: String,
        required: true,
      },
      habitation: {
        type: String,
        required: true,
      },
      projectResponsible: {
        type: String,
        required: true,
      },
    },

    // Reporting Details
    reportingDetails: {
      dateOfReporting: {
        type: Date,
        required: true,
      },
      reportedBy: {
        type: String,
        required: true,
      },
    },

    // For ID Proof & Domicile Status
    idProofAndDomicile: {
      typeOfDocument: {
        type: String,
        required: false,
      },
      natureOfIssue: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
    },

    // For Schemes
    schemes: {
      dateOfReporting: {
        type: Date,
        required: false,
      },
      eligibleSchemes: {
        type: [String],
        default: [],
      },
      natureOfIssue: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
    },

    // Progress Reporting (FY 2025–26)
    progressReporting: {
      jan25: { type: String, required: false },
      feb25: { type: String, required: false },
      mar25: { type: String, required: false },
      apr25: { type: String, required: false },
      may25: { type: String, required: false },
      jun25: { type: String, required: false },
      jul25: { type: String, required: false },
      aug25: { type: String, required: false },
      sep25: { type: String, required: false },
      oct25: { type: String, required: false },
      nov25: { type: String, required: false },
      dec25: { type: String, required: false },
      jan26: { type: String, required: false },
      feb26: { type: String, required: false },
      mar26: { type: String, required: false },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entitlement", entitlementSchema);
