const express = require('express');
const app = express();
const PORT = 3000;

// Import the router only once
const postRouter = require('./routes/posts.routes.js');

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount the router
app.use('/api/v1/posts', postRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
