const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Booking_Date: {
            type: String,
            required: true,
        },
        Client_Name: {
            type: String,
            required: true,
        },
        Client_Number: {
            type: String,
            required: true,
        },
        Appointment_Type: {
            type: String,
            required: true
        },
        Appointment_With: {
            type: String,
            required: true
        },
        Appointment_Date: {
            type: String,
            required: true
        },
        Appointment_Time: {
            type: String,
            required: true
        },
        Fees_Status: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
        Staff: {
            type: String,
            required: true
        },
        Cancel: {
            type: String,
            required: true
        },
        
    },
)

const Appointment = mongoose.model('Appointment', appointmentSchema);


module.exports = Appointment;