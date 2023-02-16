const mongoose = require('mongoose')

const StockAssigningSchema = mongoose.Schema(
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
        Assigned_Date: {
            type: String,
            required: true
        },
        Assigned_By: {
            type: String,
            required: true
        },
        Assigned_To: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
    },
)

const StockAssigning = mongoose.model('StockAssigning', StockAssigningSchema);


module.exports = StockAssigning;