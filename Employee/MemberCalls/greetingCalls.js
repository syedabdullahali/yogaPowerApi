const mongoose = require('mongoose')

const greetingCallsSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Timing: {
            type: String,
            required: true
        },
        Client_Id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Contact: {
            type: String,
            required: true
        },
        Service: {
            type: String,
            required: true
        },
        Expiry_Date: {
            type: String,
            required: true
        },
        Date_Of_Birth: {
            type: String,
            required: true
        },
        Discussion: {
            type: String,
            required: true
        },
        Counseller: {
            type: String,
            required: true
        },
    },
)

const GreetingCalls = mongoose.model('GreetingCalls', greetingCallsSchema);


module.exports = GreetingCalls;