const mongoose = require('mongoose')

const leftClientSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Member_Id: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Mobile_No: {
            type: String,
            required: true,
        },
        Invoice_No: {
            type: String,
            required: true
        },
        Attendence_Id: {
            type: String,
            required: true
        },
        Service: {
            type: String,
            required: true
        },
        Start_Date: {
            type: String,
            required: true
        },
        End_Date: {
            type: String,
            required: true
        },
        Fitness_Goal: {
            type: String,
            required: true
        },
        Appoinments: {
            type: String,
            required: true
        },
        Type_Of_Call: {
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
        Edit: {
            type: String,
            required: true
        },
        
    },
)

const LeftClient = mongoose.model('LeftClient', leftClientSchema);


module.exports = LeftClient;