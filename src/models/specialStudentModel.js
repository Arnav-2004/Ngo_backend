import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  reportingDate: { type: Date, default: Date.now },
  reportedBy: { type: String },
  natureOfIssue: { type: String },
  medical: {
    date: { type: Date },
    result: { type: String },
  },
  psychological: {
    result: { type: String },
  },
  educational: {
    date: { type: Date },
    screeningResults: { type: String },
  },
});

const specialStudentSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    age: { type: Number },
    contactNo: { type: String },
    household: { type: String },
    wardNo: { type: String },
    habitation: { type: String },
    responsibleProject: { type: String }, 
    assessments: [assessmentSchema],
    individualCarePlan: {
      plan: { type: String },
      careerReport: { type: String },
      progress: [{ reportDate: Date, details: String }],
    },
    photoDocumentation: {
      before: { type: String }, //URL
      intermediate: { type: String }, 
      after: { type: String }, 
    },
  },
  {
    timestamps: true,
  }
);

const SpecialStudent = mongoose.model('SpecialStudent', specialStudentSchema);
export default SpecialStudent;