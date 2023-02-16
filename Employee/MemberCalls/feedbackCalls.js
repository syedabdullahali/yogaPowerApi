const mongoose = require('mongoose')

const feedbackCallsSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Timing: {
            type: String,
            required: true
        },
        Client_Id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Contact: {
            type: String,
            required: true
        },
        Service: {
            type: String,
            required: true
        },
        Discussion: {
            type: String,
            required: true
        },
        Counseller: {
            type: String,
            required: true
        },
    },
)

const FeedbackCalls = mongoose.model('FeedbackCalls', feedbackCallsSchema);


module.exports = FeedbackCalls;