const mongoose = require('mongoose')

const chequeReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Cheque_No: {
            type: String,
            required: true,
        },
        Cheque_Amount: {
            type: String,
            required: true,
        },
        Bank_Details: {
            type: String,
            required: true
        },
        Deposite_By: {
            type: String,
            required: true
        },
    },
)

const ChequeReport = mongoose.model('ChequeReport', chequeReportSchema);


module.exports = ChequeReport;