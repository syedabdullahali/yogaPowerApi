const mongoose = require('mongoose')

const ClothesSchema = mongoose.Schema(
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
        Category: {
            type: String,
        },
        Color: {
            type: String,
        },
        Price: {
            type: String,
        },
        Total_Stock: {
            type: String,
        },
        Sold: {
            type: String
        },
        Available_Stock: {
            type: String
        },
        Sold_By: {
            type: String,
        },
        Action: {
            type: String,
        },
    },
)

const Clothes = mongoose.model('Clothes', ClothesSchema);


module.exports = Clothes;
