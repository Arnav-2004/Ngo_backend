import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  examType: { type: String }, 
  status: { type: String }, 
  enrollmentDate: { type: Date },
  enrolledBy: { type: String },
  applicationDate: { type: Date },
  examDate: { type: Date },
  result: { type: String },
});

const competitiveExamStudentSchema = new mongoose.Schema(
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
    educationalStatus: { type: String },
    exams: [examSchema],
  },
  {
    timestamps: true,
  }
);

const CompetitiveExamStudent = mongoose.model('CompetitiveExamStudent', competitiveExamStudentSchema);
export default CompetitiveExamStudent;