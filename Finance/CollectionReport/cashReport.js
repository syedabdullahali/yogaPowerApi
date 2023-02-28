const mongoose = require('mongoose')

const cashReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Total_Cash: {
            type: String,
            required: true,
        },
        Cash_DepositeTo_Bank: {
            type: String,
            required: true,
        },
        Cash_Handling_By: {
            type: String,
            required: true
        },
        Cash_Handover_To: {
            type: String,
            required: true
        },
    },
)

const CashReport = mongoose.model('CashReport', cashReportSchema);


module.exports = CashReport;