const mongoose = require('mongoose')

const GenerelProductSchema = mongoose.Schema(
    {
        Product_Code: {
            type: String,
        },
        Product_Name: {
            type: String,
        },
        Brand_Name: {
            type: String,
        },
        Price: {
            type: String,
        },
        Total_Stock: {
            type: String,
        },
        Available_Stock: {
            type: String,
        },
        username:{
           type: String,
        },
        Category:{
           type: String,
        },
        Color:{
           type:String,
        }
    },
)

const GenerelProduct = mongoose.model('GenerelProduct', GenerelProductSchema);


module.exports = GenerelProduct;
