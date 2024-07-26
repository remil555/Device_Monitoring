import { Router } from 'express';
import uptimeData from './controller/uptimeDataController.js'; // Ensure the file path and extension are correct

const { getUptimeData } = uptimeData;

const router = Router();

router.get('/', getUptimeData);

export default router;
