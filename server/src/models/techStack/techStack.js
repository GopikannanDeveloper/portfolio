const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
  tech_name: { type: String, required: true },
  tech_image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const learnSchema = new mongoose.Schema({
  tech_name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Tech = mongoose.model('Tech', techSchema);
const Learn = mongoose.model('Learn', learnSchema);
module.exports = Tech;
