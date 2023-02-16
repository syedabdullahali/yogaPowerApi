const mongoose = require('mongoose')

const calenderSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true
        },
        userInfo: [
            {
                userName: {
                    type: String,
                    required: true,
                },
                userTime: {
                    type: String,
                    required: true,
                },
                selectedTask: {
                    type: String,
                    required: true,
                }
            }
        ]

    },
)

const Calender = mongoose.model('Calender', calenderSchema);


module.exports = Calender;