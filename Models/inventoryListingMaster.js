let mongoose = require('mongoose')

let inventoryListingMaster = new mongoose.Schema({
    username: String,
    sataus: String,
    productCategory:String,
    productName:String,
    brandName:String,
    category:String,
    productPrize:String,
    ordersQty:String,
    Kg:String,
    Color:String,
    Available_Stock:String
}, { timestamps: true })


module.exports =   mongoose.model('inventoryListingMaster', inventoryListingMaster);
