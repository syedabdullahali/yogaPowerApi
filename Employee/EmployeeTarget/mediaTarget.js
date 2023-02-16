const mongoose = require('mongoose')

const mediaTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        Google_Reviews:{
            type:Number,
            required:true
        },
        Facebook:{
            type: String,
            required:true
        },
        Instagram:{
            type: String,
            required:true
        },
        Linkedin:{
            type: String,
            required:true
        },
        Justdial:{
            type: String,
            required:true
        },
        Achived:{
            type: String,
            required:true
        }

    },
    
)

const mediaTarget = mongoose.model('MediaTarget',mediaTargetSchema);


module.exports = mediaTarget ;