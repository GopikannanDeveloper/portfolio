require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const homeRouter = require('./src/routes/home/home');
const experienceRouter = require('./src/routes/about/WorkExp/WorkExp');
const educationRouter = require('./src/routes/about/education/education');
const myTechRouter = require('./src/routes/techStack/techStack');
const myProjectsRouter = require('./src/routes/projects/projects');

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: '*', // Allow all origins. Change this to your specific frontend domain if needed.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/api/', homeRouter);
app.use('/api/', experienceRouter);
app.use('/api/', educationRouter);
app.use('/api/', myTechRouter);
app.use('/api/', myProjectsRouter);

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
