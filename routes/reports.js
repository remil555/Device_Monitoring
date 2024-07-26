import { Router } from 'express';
import report from '../controllers/reportController.js'; // Ensure the file path and extension are correct

const { getReport } = report;

const router = Router();

router.get('/', getReport);

export default router;
