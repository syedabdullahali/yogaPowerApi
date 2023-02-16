const mongoose = require('mongoose')

const servicesRateCardSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Services_Name: {
            type: String,
            required: true,
        },
        No_Of_Sessions: {
            type: String,
            required: true
        },
        Duration: {
            type: String,
            required: true
        },
        Package: {
            type: String,
            required: true
        },
        Price: {
            type: String,
            required: true
        },
        Offer: {
            type: String,
            required: true
        },

    },
)

const ServicesRateCard = mongoose.model('ServicesRateCard', servicesRateCardSchema);


module.exports = ServicesRateCard;