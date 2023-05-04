let mongoose = require('mongoose')

let allProductListingMaster = new mongoose.Schema({
    username: String,
    callTimeing: String,
    callDiscussion:String,
    callFollowupby:String,
    callFollowUpDate:Date,
    typeOfCall:String,
    clientId:String,
    memberId:String,
    clientName:String,
    phone:Number,
    empolyeeId:String
}, { timestamps: true })


module.exports =   mongoose.model('allProductListingMaster', allProductListingMaster);
