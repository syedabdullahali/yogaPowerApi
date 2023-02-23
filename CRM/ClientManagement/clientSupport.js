const mongoose = require('mongoose')

const clientSupportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Client_Name: {
            type: String,
            required: true,
        },
        Regular_Mobile_No: {
            type: String,
            required: true,
        },
        Type_Of_Request: {
            type: String,
            required: true,
        },
        Request_Date: {
            type: String,
            required: true
        },
        Request_Details: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
        Medium: {
            type: String,
            required: true
        },
        Delete: {
            type: String,
            required: true
        },
        
    },
)

const ClientSupport = mongoose.model('ClientSupport', clientSupportSchema);


module.exports = ClientSupport;