import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Yeh server ko batayega ki index.html kahan dhoondhna hai
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  // Agar file main directory me na mile, toh yeh automatic use serve karega
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`RSK Engine active on port ${PORT}`);
});
