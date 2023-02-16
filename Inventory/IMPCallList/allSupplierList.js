const mongoose = require('mongoose')

const AllSupplierListSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Mobile: {
            type: String,
            required: true
        },
        Email_Id: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Company_Name: {
            type: String,
            required: true
        },
        
    },
)

const AllSupplierList = mongoose.model('AllSupplierList', AllSupplierListSchema);


module.exports = AllSupplierList;