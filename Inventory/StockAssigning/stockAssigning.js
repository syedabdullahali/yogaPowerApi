const mongoose = require('mongoose')

const StockAssigningSchema = mongoose.Schema(
    {
        date:{
            type: Date,
         },
        username: {
            type: String,
        },
        Product_Category: {
            type: String,
        },
        Product_Name: {
            type: String,
        },
        No_Of_Products: {
            type: String,
        },
        Brand_Name: {
            type: String,
        },
        Assigned_Date: {
            type: String,
        },
        Assigned_By: {
            type: String,
        },
        Assigned_To: {
            type: String,
        },
         Assigned_By_id: {
            type: String,
        },
        Assigned_To_id: {
            type: String,
        },
        Action: {
            type: String,
        },
        Color:{
              type: String,
        },
        Size:{
              type: String,
        },
        ProductId:{
              type: String,
        },
        Product_Prize:{
              type: String,
        },
        Total_Price:{
              type: String,
        },
    },
)

const StockAssigning = mongoose.model('StockAssigning', StockAssigningSchema);


module.exports = StockAssigning;
