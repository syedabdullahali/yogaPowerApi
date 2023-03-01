let mongoose = require('mongoose')

let brandlogoupdate = new mongoose.Schema({
    username: String,
    logoId: String,
    logoImage: String,

}, { timestamps: true })

module.exports = mongoose.model('brandlogoupdate', brandlogoupdate);