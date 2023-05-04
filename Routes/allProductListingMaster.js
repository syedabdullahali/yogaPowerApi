const express = require('express')
const router = express.Router()

const allProductListingMaster = require('../Models/allProductListingMaster')


router.get('/all',async function (req,res) {

try{
    const response = await allProductListingMaster.find()
    return res.status(200).json(response)  
} catch (err){
     return res.status(500).json({error:err})
}

} )

router.post('/create', async (req, res) => {
    try {
        const temp = await new allProductListingMaster(req.body)
        const response = await temp.save();
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.get('/:id', async function (req, res) {
    try {
        const response = await allProductListingMaster.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const response = await allProductListingMaster.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await allProductListingMaster.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router

