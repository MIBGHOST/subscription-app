// pages/api/plans.js
import connectDb from '../../../middleware/connectDb'; // Adjust the import path
import Plan from '../../../models/Plan'; // Import your Plan model

connectDb(); // Connect to your database (you need to implement this)

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const plans = await Plan.find(); // Fetch all plans from your database
      res.status(200).json(plans);
    } catch (error) {
      console.error('Error fetching plans:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}

