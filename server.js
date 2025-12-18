const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'API OK' });
});

app.post("/api/form", (req, res) => {
  console.log("Données reçues :", req.body);
  res.json({ success: true });
});

app.listen(5000, () => {
    console.log ('Serveur lancé sur le port 5000')
})