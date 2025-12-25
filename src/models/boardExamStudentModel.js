import mongoose from 'mongoose';

const progressUpdateSchema = new mongoose.Schema({
  month: { type: String }, 
  status: { type: String }, 
});

const boardExamStudentSchema = new mongoose.Schema(
  {
    householdCode: { type: String },
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    age: { type: Number },
    contactNo: { type: String },
    headOfHousehold: { type: String },
    wardNo: { type: String },
    habitation: { type: String },
    projectResponsible: { type: String },
    educationalStandard: { type: String }, 
    status: { type: String },
    reportingHistory: [
      {
        date: { type: Date },
        reportedBy: { type: String },
      },
    ],
    assessmentDetails: {
      educationalAssessmentDate: { type: Date },
      screeningResults: { type: String },
      careerCounsellingDate: { type: Date },
      counsellingReport: { type: String },
      individualCarePlan: { type: String },
    },
    progressUpdates: [progressUpdateSchema],
  },
  {
    timestamps: true,
  }
);

const BoardExamStudent = mongoose.model('BoardExamStudent', boardExamStudentSchema);
export default BoardExamStudent;