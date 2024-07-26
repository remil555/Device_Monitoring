const mongoose = require('mongoose');
const fs = require('fs');
const AnalyticalData = require('../models/AnalyticalData').default;
const UptimeData = require('../models/UptimeData');

mongoose.connect('mongodb://localhost:27017/device-monitoring', { useNewUrlParser: true, useUnifiedTopology: true });

const generateAnalyticalData = () => {
  const data = [];
  const deviceId = 'device1';
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 2);

  for (let i = 0; i < 50000; i++) {
    const timestamp = new Date(startDate.getTime() + i * 60000); // 1 minute interval
    const value = Math.round(Math.random());
    data.push({ deviceId, timestamp, data: value });
  }

  return data;
};

const generateUptimeData = () => {
  const data = [];
  const deviceId = 'device1';
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 2);

  let isConnected = true;
  for (let i = 0; i < 50000; i++) {
    const timestamp = new Date(startDate.getTime() + i * 60000); // 1 minute interval
    const state = isConnected ? 'connected' : 'disconnected';
    const duration = Math.floor(Math.random() * 60000); // Random duration
    data.push({ deviceId, timestamp, state, duration });
    isConnected = !isConnected;
  }

  return data;
};

const saveData = async () => {
  const analyticalData = generateAnalyticalData();
  const uptimeData = generateUptimeData();

  fs.writeFileSync('analyticalData.json', JSON.stringify(analyticalData, null, 2));
  fs.writeFileSync('uptimeData.json', JSON.stringify(uptimeData, null, 2));

  await AnalyticalData.insertMany(analyticalData);
  await UptimeData.insertMany(uptimeData);

  console.log('Data generated and saved to MongoDB');
  mongoose.disconnect();
};

saveData();
