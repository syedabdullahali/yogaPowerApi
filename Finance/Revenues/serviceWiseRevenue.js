const mongoose = require('mongoose')

const serviceWiseRevenueSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Month: {
            type: String,
            required: true,
        },
        Type_Of_Service: {
            type: String,
            required: true,
        },
        No_Of_Client: {
            type: String,
            required: true,
        },
        Amounts: {
            type: String,
            required: true
        },
       
    },
)

const ServiceWiseRevenue = mongoose.model('ServiceWiseRevenue', serviceWiseRevenueSchema);


module.exports = ServiceWiseRevenue;