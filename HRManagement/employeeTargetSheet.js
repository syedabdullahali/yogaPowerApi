const mongoose = require('mongoose')

const employeeTargetSheetSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Employee: {
            type: String,
            required: true,
        },
        Type_Of_Target: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        Jan: {
            type: String,
            required: true
        },
        Feb: {
            type: String,
            required: true
        },
        March: {
            type: String,
            required: true
        },
        April: {
            type: String,
            required: true
        },
        May: {
            type: String,
            required: true
        },
        June: {
            type: String,
            required: true
        },
        July: {
            type: String,
            required: true
        },
        August: {
            type: String,
            required: true
        },
        Sept: {
            type: String,
            required: true
        },
        Oct: {
            type: String,
            required: true
        },
        Nov: {
            type: String,
            required: true
        },
        Dec: {
            type: String,
            required: true
        },
        Id: {
            type: String,
            required: true
        },
        TargetValue: {
            type: String,
            required: true
        },
      
    },
)

const EmployeeTargetSheet = mongoose.model('EmployeeTargetSheet', employeeTargetSheetSchema);


module.exports = EmployeeTargetSheet;