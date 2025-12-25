import mongoose from 'mongoose';

const dropoutSchema = new mongoose.Schema(
  {
    householdCode: { type: String },
    name: { type: String, required: true },
    gender: { type: String, enum: ['Boy', 'Girl', 'Other'] },
    age: { type: Number },
    contactNo: { type: String },
    headOfHousehold: { type: String },
    wardNo: { type: String },
    habitation: { type: String },
    projectResponsible: { type: String },
    dropoutInfo: {
      reportingDate: { type: Date },
      reportedBy: { type: String },
      yearOfDropout: { type: Number },
      educationLevel: { type: String },
      schoolName: { type: String },
      reason: { type: String },
      documentsChecked: [String], 
    },
    readmissionInfo: {
      status: { type: String, enum: ['Enrolled', 'Pending', 'Not Enrolled'] },
      date: { type: Date },
      educationLevel: { type: String },
      schoolName: { type: String },
      individualCarePlan: { type: String },
      counsellingReport: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Dropout = mongoose.model('Dropout', dropoutSchema);
export default Dropout;