// Simple Express server with no endpoints
const express = require('express');
const app = express();
const PORT = 8001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js Express server!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
