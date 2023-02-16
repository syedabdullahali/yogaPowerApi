const mongoose = require('mongoose')

const WorkoutTemplateSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Type_Of_Exercise: {
            type: String,
            required: true,
        },
        Exercise_Name: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
        
    },
)

const WorkoutTemplate = mongoose.model('WorkoutTemplate', WorkoutTemplateSchema);


module.exports = WorkoutTemplate;