const express = require('express')
const router = express.Router()
//modelName
const allEnquiry = require('../Models/allEnquiry')

router.get('/all', async function (req, res) {
    try {
        const response = await allEnquiry.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        const {
            MemberId,
            Profile,
            Mobile,
            Invoice,
            AttendanceId,
            Services,
            StartDate,
            Enddate,
            CallStatus,
            Appointments,
            Traning,
            Status
        } = req.body
        const temp = await new allEnquiry({
            MemberId,
            Profile,
            Mobile,
            Invoice,
            AttendanceId,
            Services,
            StartDate,
            Enddate,
            CallStatus,
            Appointments,
            Traning,
            Status
        })
        const response = await temp.save();
        // const response = await allClinets.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router