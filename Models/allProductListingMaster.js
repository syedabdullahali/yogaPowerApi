let mongoose = require('mongoose')

let allProductListingMaster = new mongoose.Schema({
    sataus:Boolean,
    productCategory:String,
    productName:String,
    brandName:String,
    category:String,
    productPrize:Stirng,
    ordersQty:String,    
}, { timestamps: true })


module.exports =   mongoose.model('allProductListingMaster', allProductListingMaster);
