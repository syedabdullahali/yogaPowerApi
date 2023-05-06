const express = require('express')
const router = express.Router()

const inventoryListingMaster = require('../Models/inventoryListingMaster')


router.get('/all',async function (req,res) {

try{
    const response = await inventoryListingMaster.find()
    return res.status(200).json(response)  
} catch (err){
     return res.status(500).json({error:err})
}

} )

router.post('/create', async (req, res) => {
    try {
        const temp = await new inventoryListingMaster(req.body)
        const response = await temp.save();
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.get('/:id', async function (req, res) {
    try {
        const response = await inventoryListingMaster.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const response = await inventoryListingMaster.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await inventoryListingMaster.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router

