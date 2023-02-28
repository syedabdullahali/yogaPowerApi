const mongoose = require('mongoose')

const pettyCashSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Particulars: {
            type: String,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        Credit: {
            type: String,
            required: true
        },
        Debit: {
            type: String,
            required: true
        },
        Balance: {
            type: String,
            required: true
        },
        Paid_By: {
            type: String,
            required: true
        },
        Approved_By: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
    },
)

const PettyCash = mongoose.model('PettyCash', pettyCashSchema);


module.exports = PettyCash;