const mongoose = require('mongoose')

const customerReviewSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Mobile: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Review: {
            type: String,
            required: true
        },
        Reply_Post: {
            type: String,
            required: true
        },
        Link: {
            type: String,
            required: true
        },
        
    },
)

const CustomerReview = mongoose.model('CustomerReview', customerReviewSchema);


module.exports = CustomerReview;