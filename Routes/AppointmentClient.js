const express = require('express')
const router = express.Router()
//modelName
const AppointmentClient = require('../Models/AppointmentClient')

router.get('/all', async function (req, res) {
    try {
        const response = await AppointmentClient.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/:id', async function (req, res) {
    try {
        const response = await AppointmentClient.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        const temp = await new AppointmentClient(req.body)
        const response = await temp.save();
        // const response = await AppointmentClient.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const response = await AppointmentClient.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await AppointmentClient.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router