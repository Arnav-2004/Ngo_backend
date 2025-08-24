import mongoose from "mongoose";

const dbSchemaEntitlements = new mongoose.Schema(
  {
    basicInfo: {
      householdCode: { type: String, required: true },
      uniqueId: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
      age: { type: Number, min: 0 },
      contactNo: { type: String },
      headOfHousehold: { type: String },
      wardNo: { type: Number, required: true },
      habitation: { type: String },
      projectResponsible: { type: String },
    },

    entitlementDetails: {
      schemeName: { type: String, required: true },
      category: {
        type: String,
        enum: ["Health", "Education", "Social Security", "Livelihood", "Other"],
        required: true,
      },
      type: { type: String, enum: ["Central", "State", "Local"], required: true },
      eligibilityStatus: {
        type: String,
        enum: ["Eligible", "Not Eligible", "Pending"],
        default: "Pending",
      },
      applicationDate: { type: Date },
      appliedBy: { type: String },
    },

    statusTracking: {
      applicationStatus: {
        type: String,
        enum: ["Applied", "In Process", "Approved", "Rejected"],
        default: "Applied",
      },
      approvalDate: { type: Date },
      applicationRefNo: { type: String },
      authority: { type: String },
      remarks: { type: String },
    },

    benefitsReceived: {
      benefitType: { type: String, enum: ["Cash", "Kind", "Service"] },
      value: { type: Number, min: 0 },
      receiptDate: { type: Date },
      renewalDue: { type: Date },
    },

    supportingDocs: [
      {
        documentType: { type: String },
        submitted: { type: Boolean, default: false },
        verifiedBy: { type: String },
        dateVerified: { type: Date },
      },
    ],

    photo: { type: String },
  },
  { timestamps: true }
);

export { dbSchemaEntitlements };
