import { Router } from 'express';
import analyticalData from './controller/analyticalDataController.js'; // Check path and extension

const { getAnalyticalData } = analyticalData;

const router = Router();

router.get('/', getAnalyticalData);

export default router;
