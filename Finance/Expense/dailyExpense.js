const mongoose = require('mongoose')

const dailyExpenseSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Voucher_Number: {
            type: String,
            required: true,
        },
        Expense_Category: {
            type: String,
            required: true,
        },
        Details_Of_Expense: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
        Payment_Mode: {
            type: String,
            required: true
        },
        Paid_To: {
            type: String,
            required: true
        },
        Approved_By: {
            type: String,
            required: true
        },
        Created_By: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
    },
)

const DailyExpense = mongoose.model('DailyExpense', dailyExpenseSchema);


module.exports = DailyExpense;