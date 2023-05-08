const express = require('express')
const router = express.Router()
const StockOrderList=require('../../Inventory/StockOrderList/stockOrderList')

router.post('/create',async(req,res)=>{
    try{
     const stockOrderList= await StockOrderList.create(req.body)
     res.status(200).json(stockOrderList);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

router.get('/all',async(req,res)=>{
    try{
        const  stockOrderList= await  StockOrderList.find({"Status": "Not Recevied yet"});
        res.status(200).json( stockOrderList);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})


router.get('/recevied',async(req,res)=>{
    try{
        const  stockOrderList= await  StockOrderList.find({"Status": "Recevied"});
        res.status(200).json( stockOrderList);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

router.get('/sold',async(req,res)=>{
    try{
        const  stockOrderList= await  StockOrderList.find({"Status": "Sold"});
        res.status(200).json( stockOrderList);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockOrderList = await  StockOrderList.findById(id);
        res.status(200).json( stockOrderList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})





//to update stockOrderList by id
router.post('/update/:id',async(req,res)=>{
    try {
        const response = await StockOrderList.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

// delete a stock order list
router.delete('/delete/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockOrderList = await  StockOrderList.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!stockOrderList){
            return res.status(404).json({message:`cannot find any Stock Order List with ${id}`})
        }
        
        res.status(200).json(stockOrderList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports = router
