import { find } from '../models/UptimeData.js';

const getUptimeData = async (req, res) => {
  try {
    const data = await find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { getUptimeData };
