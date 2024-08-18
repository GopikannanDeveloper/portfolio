const mongoose = require('mongoose')

const workExpSchema = new mongoose.Schema({
    position: { type: String, required: true },
    job_type: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const WorkExp = mongoose.model('WorkExp', workExpSchema);

module.exports = WorkExp;