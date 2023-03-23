let mongoose = require('mongoose')
let Batch = new mongoose.Schema({
	username: String,
	service_name: String,
	service_variation: String,
	Batch_Duration: String,
	batch_timing: String,
	status: Boolean,
	trainer_name:String,
	category:String
}, { timestamps: true })
module.exports = mongoose.model('Batch', Batch);