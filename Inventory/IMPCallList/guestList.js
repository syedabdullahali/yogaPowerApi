const mongoose = require('mongoose')

const GuestListSchema = mongoose.Schema(
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
        Event: {
            type: String,
            required: true
        },
        
    },
)

const GuestList = mongoose.model('GuestList', GuestListSchema);


module.exports = GuestList;