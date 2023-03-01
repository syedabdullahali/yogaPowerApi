const mongoose = require('mongoose');
let designation = new mongoose.Schema(
    {
        username: String,
        jobDesignation: String,
        department: String,
        availableVacancy: Number,
        status: Boolean,
    }, { timestamps: true }
);
module.exports = mongoose.model('designations', designation);