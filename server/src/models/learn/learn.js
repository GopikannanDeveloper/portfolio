const mongoose = require('mongoose');

const learnSchema = new mongoose.Schema({
  tech_name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const myLearn = mongoose.model('myLearn', learnSchema);
module.exports = myLearn;
