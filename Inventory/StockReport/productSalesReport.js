const mongoose = require('mongoose')

const ProductSalesReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String
        },
        Date: {
            type: Date
        },
        Client_Name: {
            type: String
        },
        Mobile_No: {
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
            type: String
        },
        Quantity: {
            type: String
        },
        Sold_By: {
            type: String
        },
        Total_Invoice: {
            type: String
        },
        
    },
)

const ProductSalesReport = mongoose.model('ProductSalesReport', ProductSalesReportSchema);


module.exports = ProductSalesReport;
