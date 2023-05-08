const mongoose = require('mongoose')

const StockOrderListSchema = mongoose.Schema(
    {
        Order_Date: {
            type:Date,
        },
        Product_Category: {
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
        Product_Price: {
            type: String,
        },
        Orders_Quantity: {
            type: String,
        },
        Total_Price: {
            type: String,
        },
        Action: {
            type: String,
        },
        EmployeeName:{
            type: String,
        },
        EmployeeId:{
             type: String,
        },
        Color:{
             type: String,
        },
        Status:{
           type: String,
        },
        receivedDate:{
            type:Date
        },
        receivedBy:{
        type: String
       },
       receiverId:{
        type: String
      },
      ProductId:{
        type: String
      },
      StatOfStock:{
         type: String
      },
       Client_Name:{
         type: String
      },
        Mobile_No:{
         type: String
      },
        Product_Code:{
         type: String
      },
       soldBy:{
         type: String
      },
        sellerId:{
         type: String
      },

    },
)

const StockOrderList = mongoose.model('StockOrderList', StockOrderListSchema);


module.exports = StockOrderList;
