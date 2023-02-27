const mongoose = require('mongoose')

const renewlsRevenueSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Month: {
            type: String,
            required: true,
        },
        Service_Wise_Client: {
            type: String,
            required: true,
        },
        Total_Renewal_Client: {
            type: String,
            required: true,
        },
        Renewed: {
            type: String,
            required: true
        },
        No_Of_Left: {
            type: String,
            required: true
        },
        Renewls_Revenue: {
            type: String,
            required: true
        },
    },
)

const RenewlsRevenue = mongoose.model('RenewlsRevenue', renewlsRevenueSchema);


module.exports = RenewlsRevenue;