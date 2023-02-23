const mongoose = require('mongoose')

const bulkMailerSchema = mongoose.Schema(
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
        Services: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
        Option: {
            type: String,
            required: true
        },
        
    },
)

const BulkMailer = mongoose.model('BulkMailer', bulkMailerSchema);


module.exports = BulkMailer;