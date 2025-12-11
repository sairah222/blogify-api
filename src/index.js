const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(cors());
app.use(express.json());

// Mount master router (only one app.use for routes)
const mainRouter = require('./routes');
app.use('/api/v1', mainRouter);

// Centralized error handler (must be after routes)
const { errorHandler } = require('./middleware/error.handler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Blogify API running on http://localhost:${PORT}`);
});
