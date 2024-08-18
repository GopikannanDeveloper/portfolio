const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  tech_stack: { type: String, required: true },
  duration:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
