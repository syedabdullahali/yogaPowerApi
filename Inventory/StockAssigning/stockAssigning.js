const mongoose = require('mongoose')

const StockAssigningSchema = mongoose.Schema(
    {
        date:{
            type: Date,
         },
        username: {
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
        Color:{
              type: String,
        },
        Size:{
              type: String,
        }
    },
)

const StockAssigning = mongoose.model('StockAssigning', StockAssigningSchema);


module.exports = StockAssigning;
