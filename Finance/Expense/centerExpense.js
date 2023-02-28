const mongoose = require('mongoose')

const centerExpenseSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Details_Of_Expense: {
            type: String,
            required: true,
        },
        Budgeting: {
            type: String,
            required: true,
        },
        Jan_Expense: {
            type: String,
            required: true,
        },
        Feb_Expense: {
            type: String,
            required: true
        },
        March_Expense: {
            type: String,
            required: true
        },
        April_Expense: {
            type: String,
            required: true
        },
        May_Expense: {
            type: String,
            required: true
        },
        June_Expense: {
            type: String,
            required: true
        },
        July_Expense: {
            type: String,
            required: true
        },
        August_Expense: {
            type: String,
            required: true
        },
        September_Expense: {
            type: String,
            required: true
        },
        Oct_Expense: {
            type: String,
            required: true
        },
        Nov_Expense: {
            type: String,
            required: true
        },
        Dec_Expense: {
            type: String,
            required: true
        },
    },
)

const CenterExpense = mongoose.model('CenterExpense', centerExpenseSchema);


module.exports = CenterExpense;