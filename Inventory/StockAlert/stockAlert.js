const mongoose = require('mongoose')

const StockAlertSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        Product_Name: {
            type: String,
            required: true
        },
        No_Of_Products: {
            type: String,
            required: true
        },
        Brand_Name: {
            type: String,
            required: true
        },
        Total_Stock: {
            type: String,
            required: true
        },
        Use_Stock: {
            type: String,
            required: true
        },
        Available_Stock: {
            type: String,
            required: true
        },
        Alert_Stock: {
            type: String,
            required: true
        },
        
    },
)

const StockAlert = mongoose.model('StockAlert', StockAlertSchema);


module.exports = StockAlert;