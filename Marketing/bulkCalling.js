const mongoose = require('mongoose')

const bulkCallingSchema = mongoose.Schema(
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
        
    },
)

const BulkCalling = mongoose.model('BulkCalling', bulkCallingSchema);


module.exports = BulkCalling;