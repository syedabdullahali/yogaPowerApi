const mongoose = require('mongoose')

const RenewalsCallsSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
        },
        Date: {
            type: String,
        },
        Timing: {
            type: String,
        },
        Client_Id: {
            type: String,
        },
        Name: {
            type: String,
        },
        Contact: {
            type: String,
        },
        Service: {
            type: String,
        },
        Type_Of_Calls: {
            type: String,
        },
        Discussion: {
            type: String,
        },
        Counseller: {
            type: String,
        },
        Member_Id:{
         type: String,
        }
    },
)

const RenewalsCalls = mongoose.model('RenewalsCalls', RenewalsCallsSchema);


module.exports = RenewalsCalls;
