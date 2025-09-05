import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema(
  {
    groupDetails: {
      groupId: { type: String, required: true, unique: true }, // Group id (key)
      groupName: { type: String, required: true },             // Group name
      groupType: { type: String, required: true },             // Group type
      wardNo: { type: Number, required: true },                // Ward No.
      habitation: { type: String, required: true },            // Habitation
      projectResponsible: { type: String, required: true },    // Project Responsible
    },
    trainingDetails: {
      topic: { type: String, required: true },                  // Topic (text)
      dateOfTraining: { type: Date, required: true },           // Date of Training
      resourcePerson: { type: String, required: true },         // Resource Person
      profileOfResourcePerson: { type: String },                // Profile (text)
      agenda: { type: String },                                 // Agenda (text)
      totalParticipants: { type: Number, min: 0 },              // Total Participants
      outcome: { type: String },                                // Outcome (text)
    },
  },
  { timestamps: true }
);

export default mongoose.model('Workshop', workshopSchema);
