import mongoose from 'mongoose';

const actionPlanSchema = new mongoose.Schema({
  action: { type: String, required: true },
  progressUpdates: [
    {
      date: { type: Date },
      update: { type: String },
    },
  ],
});

const schoolSchema = new mongoose.Schema(
  {
    schoolCode: { type: String },
    name: { type: String, required: true },
    wardNo: { type: String },
    educationLevel: { type: String },
    timings: { type: String },
    mediumOfInstruction: { type: String },
    studentType: { type: String, enum: ['Boys', 'Girls', 'Co-ed'] },
    totalStudents: { type: Number },
    principal: {
      name: { type: String },
      contact: { type: String },
    },
    projectResponsible: { type: String },
    keyIssues: [String],
    actionPlans: [actionPlanSchema],
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model('School', schoolSchema);
export default School;