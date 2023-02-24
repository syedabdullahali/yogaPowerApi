const mongoose = require('mongoose')

const balancePaymentSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Purchase_Date: {
            type: String,
            required: true,
        },
        Center_Name: {
            type: String,
            required: true,
        },
        Client_Id: {
            type: String,
            required: true,
        },
        Client_Name: {
            type: String,
            required: true
        },
        Services: {
            type: String,
            required: true
        },
        Counseller: {
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
        PayMode: {
            type: String,
            required: true
        },
        

    },
)

const BalancePayment = mongoose.model('BalancePayment', balancePaymentSchema);


module.exports = BalancePayment;