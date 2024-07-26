const mongoose = require('mongoose');

const uptimeDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  state: { type: String, enum: ['connected', 'disconnected'], required: true },
  duration: { type: Number, required: true }
}, { timestamps: true });

uptimeDataSchema.index({ timestamp: 1 }, { expireAfterSeconds: 3600 });

const UptimeData = mongoose.model('UptimeData', uptimeDataSchema);

module.exports = UptimeData;
