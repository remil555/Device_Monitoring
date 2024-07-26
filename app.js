import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/database.js';
import analyticalDataRoutes from '../routes/analyticalData.js';
import uptimeDataRoutes from '../routes/uptimeData.js';
import reportsRoutes from '../routes/reports.js';

config();

console.log('connectDB imported:', connectDB);

const app = express();
const port = process.env.PORT || 3000;

app.use(json());


connectDB();

app.use('/api/analytical-data', analyticalDataRoutes);
app.use('/api/uptime-data', uptimeDataRoutes);
app.use('/api/reports', reportsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;