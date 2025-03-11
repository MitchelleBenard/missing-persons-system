import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  lastSeen: { type: String, required: true },
  phone: { type: String, required: true },
  photo: String,
  emergencyOption: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  idNumber: { type: String, required: true },
  additionalDetails: String,
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Report', reportSchema)