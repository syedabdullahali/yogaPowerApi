const mongoose = require('mongoose')

const AllDietClientSchema = mongoose.Schema(
    {
        Member_Id: {
            type: String,
            required: true,
        },
        Start_Date: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Mobile_No: {
            type: String,
            required: true
        },
        Gender: {
            type: String,
            required: true
        },
        Purpose: {
            type: String,
            required: true
        },
        EndDate: {
            type: String,
            required: true
        },
        Package: {
            type: String,
            required: true
        },
        DietitianName: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
    },
)

const AllDietClient = mongoose.model('AllDietClient', AllDietClientSchema);


module.exports = AllDietClient;