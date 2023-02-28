const mongoose = require('mongoose')

const revenueReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Center_Name: {
            type: String,
            required: true,
        },
        Jan: {
            type: String,
            required: true,
        },
        Feb: {
            type: String,
            required: true,
        },
        March: {
            type: String,
            required: true
        },
        Apr: {
            type: String,
            required: true
        },
        May: {
            type: String,
            required: true
        },
        June: {
            type: String,
            required: true
        },
        July: {
            type: String,
            required: true
        },
        Aug: {
            type: String,
            required: true
        },
        Sept: {
            type: String,
            required: true
        },
        Oct: {
            type: String,
            required: true
        },
        Nov: {
            type: String,
            required: true
        },
        Dec: {
            type: String,
            required: true
        }
    },
)

const RevenueReport = mongoose.model('RevenueReport', revenueReportSchema);


module.exports = RevenueReport;