const mongoose = require('mongoose')

const FoodsProductSchema = mongoose.Schema(
    {
         username: {
            type: String
        },
        Product_Code: {
            type: String
        },
        Product_Name: {
            type: String
        },
        Brand_Name: {
            type: String
        },
        Category: {
            type: String
        },
        Color: {
            type: String
        },
        Price: {
            type: String,
        },
        Total_Stock: {
            type: String
        },
        Sold: {
            type: String
        },
        Available_Stock: {
            type: String
        },
        Sold_By: {
            type: String
        },
        Action: {
            type: String
        },
    },
)

const FoodsProduct = mongoose.model('FoodsProduct', FoodsProductSchema);


module.exports = FoodsProduct;
