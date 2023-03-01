
let mongoose = require('mongoose')

let Package = new mongoose.Schema({
	username: String,
	Package_Name: String,
	fees: Number,
	packages: String,
	duration: String,
	status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('Package', Package);

