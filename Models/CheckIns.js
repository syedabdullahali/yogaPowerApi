let mongoose = require('mongoose')

let checkIns  = new mongoose.Schema({
    username: String,
    sataus: String,
    productCategory:String,
    productName:String,
    brandName:String,
    category:String,
    productPrize:String,
    ordersQty:String,
    Kg:String,
    Color:String
}, { timestamps: true })


module.exports =   mongoose.model('checkIns ', checkIns );


// username: String,
// centercode: String,
// date: Date,
// attendanceId:String,
// name: String,
// designation: String,
// shiftTimeing: Number,
// startTime: String,
// endTime: String,
// checkInTime:String,
// checkOutTime: String,
// totalWorkinghour: String,
// status: String,