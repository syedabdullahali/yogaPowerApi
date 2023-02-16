const mongoose = require('mongoose')

const StockOrderListSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Order_Date: {
            type: String,
            required: true,
        },
        Product_Category: {
            type: String,
            required: true,
        },
        Product_Name: {
            type: String,
            required: true
        },
        Brand_Name: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Product_Price: {
            type: String,
            required: true
        },
        Orders_Quantity: {
            type: String,
            required: true
        },
        Total_Price: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
    },
)

const StockOrderList = mongoose.model('StockOrderList', StockOrderListSchema);


module.exports = StockOrderList;