const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  prof_summary: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
