const express = require('express');
const app = express();

// ✅ This is required to parse JSON body
app.use(express.json());

app.post('/add', (req, res) => {
  console.log('Received body:', req.body);  // Debugging

  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'num1 and num2 must be numbers' });
  }

  const result = num1 + num2;
  res.json({ result });
});

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
