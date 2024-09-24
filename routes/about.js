const express = require('express');
const router = express.Router();
const path = require('path'); // Certifique-se de que o path está importado

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html')); // Use path.join
});

module.exports = router;