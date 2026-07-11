const express = require('express');
const path = require('path');
const app = express();

// Main directory se files serve karne ke liye root configuration
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`RSK Engine running on port ${PORT}`);
});
