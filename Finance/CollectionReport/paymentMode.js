const mongoose = require('mongoose')

const paymentModeSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Cash: {
            type: String,
            required: true,
        },
        GPay: {
            type: String,
            required: true,
        },
        Card: {
            type: String,
            required: true
        },
        A_C: {
            type: String,
            required: true
        },
        UPI: {
            type: String,
            required: true
        },
        Cheque: {
            type: String,
            required: true
        },
        Total_Collection:{
            type: String,
            required: true
        },
        Collected_By: {
            type: String,
            required: true
        },
    },
)

const PaymentMode = mongoose.model('PaymentMode', paymentModeSchema);


module.exports = PaymentMode;