const express = require('express');
const router = express.Router();

// Resource routers
const postsRouter = require('./posts.routes');

// Mount each resource on its path (no version prefix here)
router.use('/posts', postsRouter);

// Optionally: health check
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: { message: 'Blogify API v1' } });
});

module.exports = router;
