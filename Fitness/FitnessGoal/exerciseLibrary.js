const mongoose = require('mongoose')

const ExerciseLibrarySchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Category_Name: {
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
        Created_By: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
       
        
    },
)

const ExerciseLibrary = mongoose.model('ExerciseLibrary', ExerciseLibrarySchema);


module.exports = ExerciseLibrary;