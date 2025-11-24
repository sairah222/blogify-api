const express = require('express');
const router = express.Router();

// GET /api/v1/posts/
router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

module.exports = router;
