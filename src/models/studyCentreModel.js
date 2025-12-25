import mongoose from 'mongoose';

const progressReportSchema = new mongoose.Schema({
  reportDate: { type: Date, required: true },
  totalChildrenPresent: { type: Number, required: true },
  notes: { type: String },
});

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: { type: String },
});

const studyCentreSchema = new mongoose.Schema(
  {
    centreCode: { type: String, unique: true }, 
    centreName: { type: String, required: true },
    wardNo: { type: String, required: true },
    habitation: { type: String },
    sourceOfFunding: { type: String },
    infrastructure: { type: String },
    timing: { type: String }, 
    studentLevel: { type: String }, 
    projectResponsible: { type: String },
    establishmentDate: { type: Date },
    totalStudents: { type: Number },
    groupLeaderContact: { type: String },
    teachers: [teacherSchema],
    progressReports: [progressReportSchema],
  },
  {
    timestamps: true,
  }
);

const StudyCentre = mongoose.model('StudyCentre', studyCentreSchema);
export default StudyCentre;