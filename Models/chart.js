import mongoose from 'mongoose';

const ChartSchema = new mongoose.Schema({
  Title: String,
  Value: String,
  SubValue: String,
  ImageUrl: String,
  ChartId: String,
  Chartdata: String, // Can change to Array if needed later
  Stats: String, // You can change to Object if needed
}, { timestamps: true });

export default mongoose.models.Chart || mongoose.model('Chart', ChartSchema);
