const mongoose = require('mongoose')

const newClientRevenueSchema = mongoose.Schema(
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
        No_Of_Leads: {
            type: String,
            required: true,
        },
        No_Of_Clients: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
    },
)

const NewClientRevenue = mongoose.model('NewClientRevenue', newClientRevenueSchema);


module.exports = NewClientRevenue;