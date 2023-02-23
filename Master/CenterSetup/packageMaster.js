const mongoose = require('mongoose')

const packageMasterSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
         username: {
            type: String,
            required: true,
        },
        Service: {
            type: String,
            required: true,
        },
        Variation: {
            type: String,
            required: true,
        },
        Package_Name: {
            type: String,
            required: true,
        },
        Duration: {
            type: String,
            required: true
        },
        Fees: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
    },
)

const PackageMaster = mongoose.model('PackageMaster', packageMasterSchema);


module.exports = PackageMaster;
