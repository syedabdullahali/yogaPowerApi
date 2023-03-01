let mongoose = require('mongoose')

let galleryMaster = new mongoose.Schema({
    username: String,
    date: Date,
    Name: String,
    galleryType: String,
    Description: String,
    url: String,
    image: String,
}, { timestamps: true })

module.exports = mongoose.model('galleryMaster', galleryMaster);
