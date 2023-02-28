const mongoose = require('mongoose')

const leadReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Month: {
            type: String,
            required: true,
        },
        Sources: {
            type: String,
            required: true,
        },
        Investment_Amount: {
            type: String,
            required: true,
        },
        No_Of_Leads: {
            type: String,
            required: true
        },
        Conversion: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
    },
)

const LeadReport = mongoose.model('LeadReport', leadReportSchema);


module.exports = LeadReport;