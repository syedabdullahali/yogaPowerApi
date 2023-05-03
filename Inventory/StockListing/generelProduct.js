const mongoose = require('mongoose')

const GenerelProductSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
        },
        Product_Code: {
            type: String,
        },
        Product_Name: {
            type: String,
        },
        Brand_Name: {
            type: String,
        },
        Quantity: {
            type: String,
        },
        Price: {
            type: String,
        },
        Total_Stock: {
            type: String,
        },
        Use: {
            type: String,
        },
        Available_Stock: {
            type: String,
        },
        AllotBy: {
            type: String,
        },
        AllotTo: {
            type: String,
        },
        username:{
           type: String,
        }
    },
)

const GenerelProduct = mongoose.model('GenerelProduct', GenerelProductSchema);


module.exports = GenerelProduct;
