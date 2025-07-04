const express = require('express');
const cors = require('cors');
const { getRandomHeadline } = require('./headlines');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
  // Simulate data
  const rating = 4.3;
  const reviews = 127;
  const headline = getRandomHeadline(name, location);

  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
  const headline = getRandomHeadline(name, location);
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
