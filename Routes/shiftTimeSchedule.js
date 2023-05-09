const express = require('express');
const shiftTimeSchedule = require('../Models/shiftTimeSchedule')
const router = express.Router()
//modelNam


router.get('/all',async function (req,res) {

try{
    const response = await shiftTimeSchedule.find()
    return res.status(200).json(response)  
} catch (err){
     return res.status(500).json({error:err})
}

} )

router.post('/create', async (req, res) => {
    try {
        const temp = await new shiftTimeSchedule(req.body)
        const response = await temp.save();
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.get('/:id', async function (req, res) {
    try {
        const response = await shiftTimeSchedule.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const response = await shiftTimeSchedule.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await shiftTimeSchedule.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router









module.exports = router
