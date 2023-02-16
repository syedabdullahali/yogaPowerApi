const mongoose = require('mongoose')

const IMPCallListSchema = mongoose.Schema(
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

const IMPCallList = mongoose.model('IMPCallList', IMPCallListSchema);


module.exports = IMPCallList;