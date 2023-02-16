const mongoose = require('mongoose')

const paymentCallsSchema = mongoose.Schema(
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
        Duration: {
            type: String,
            required: true
        },
        Total_Amount: {
            type: String,
            required: true
        },
        Paid: {
            type: String,
            required: true
        },
        Balance: {
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

const PaymentCalls = mongoose.model('PaymentCalls', paymentCallsSchema);


module.exports = PaymentCalls;