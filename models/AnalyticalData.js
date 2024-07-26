import { Schema, model } from 'mongoose';

const analyticalDataSchema = new Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  data: { type: Number, required: true }
}, { timestamps: true });

analyticalDataSchema.index({ timestamp: 1 }, { expireAfterSeconds: 3600 });

const AnalyticalData = model('AnalyticalData', analyticalDataSchema);

export default AnalyticalData;
