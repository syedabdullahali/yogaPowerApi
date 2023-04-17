const dotenv = require('dotenv')
dotenv.config();


const router = require('express').Router()
const ShiftTimeModel = require('../Models/shift-time')
const jwtMiddleware = require('../Routes/jwt')



//POST ROUTE
router.post('/shit-time-management', jwtMiddleware, async (req, resp) => {
    const newEntry = await ShiftTimeModel.create(req.body)
    resp.json({ success: true, message: 'Data saved successfully', newEntry: newEntry })
})



//UPDATE ROUTE
router.put('/edit/:id', jwtMiddleware, async (req, resp) => {
    const {id }= req.params
    try {
        const existingData = await ShiftTimeModel.find({ _id: id })
        if (existingData) {
            existingData = await ShiftTimeModel.UpdateOne({ _id: id }, { $set: req.body })
            resp.json({ success: true, message: 'Data updated successfully' })
        }
        else {
            resp.json({ success: true, message: "Something is wrong.Can't update data" })
        }
    }
    catch (err) {
        resp.json({ sucess: false, message: err.message })
    }
})


//DELETE ROUTE
router.delete('/delete/:id',jwtMiddleware,async(req,resp)=>{
    const {id}=req.params
    try{
        const existingData=await ShiftTimeModel.findOne({_id:id})
        if(existingData){
            const list=await ShiftTimeModel.deleteOne({_id:id})
            resp.json({success:true, message:'data deleted successfully', list:list})
        }
        else{

        }
    }
    catch(err){
        resp.json
    }
})

module.exports = router