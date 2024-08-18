const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./src/routes/home/home');
const experienceRouter = require('./src/routes/about/WorkExp/WorkExp')
const educationRouter = require('./src/routes/about/education/education');
const myTechRouter = require('./src/routes/techStack/techStack');
const myProjectsRouter = require('./src/routes/projects/projects');
const cors = require('cors');

const PORT = 8080;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/', homeRouter);
app.use('/api/', experienceRouter);
app.use('/api/', educationRouter);
app.use('/api/', myTechRouter);
app.use('/api/', myProjectsRouter);
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/portfolio-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
