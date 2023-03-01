let mongoose = require('mongoose')
let AppointmentClient = new mongoose.Schema({
    userId: String,
    ClientName:String,
    ClientNumber:Number,
    AppointmentId: String,
    AppointmentDate: Date,
    AppointmentTime: String,
    StaffName: String,
    PersonName: String,
    PersonNumber: Number,
}, { timestamps: true })
module.exports = mongoose.model('AppointmentClients', AppointmentClient);
