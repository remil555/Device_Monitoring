import AnalyticalData from '../models/AnalyticalData.js';

const getAnalyticalData = async (req, res) => {
  try {
    const data = await AnalyticalData.aggregate([
      {
        $group: {
          _id: {
            hour: { $hour: "$timestamp" },
            day: { $dayOfMonth: "$timestamp" }
          },
          count: { $sum: 1 },
          total: { $sum: "$data" },
          avgRate: { $avg: "$data" }
        }
      }
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

export default { getAnalyticalData };
