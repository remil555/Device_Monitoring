import { aggregate } from '../models/AnalyticalData';
import { aggregate as _aggregate } from '../models/UptimeData';

const getReport = async (req, res) => {
  try {
    const analyticalData = await aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$data" },
          avgRate: { $avg: "$data" },
          busiestDays: { $max: "$data" },
          quietestDays: { $min: "$data" }
        }
      }
    ]);

    const uptimeData = await _aggregate([
      {
        $group: {
          _id: "$state",
          totalDuration: { $sum: "$duration" }
        }
      }
    ]);

    res.status(200).json({ analyticalData, uptimeData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { getReport };
