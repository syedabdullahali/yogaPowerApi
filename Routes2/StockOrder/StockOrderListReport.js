const express = require('express')
const router = express.Router()

const StockOrderList=require('../../Inventory/StockOrderList/stockOrderList')

router.get('/all', async(req, res) => {
    try{
        const receivedStockList = await StockOrderList.find({Status: "Recevied"})
        const map = new Map();
        for(let i=0; i<receivedStockList.length; i++){
            if(!map.has(receivedStockList[i].ProductId)){
                     
                const qunatity =  +receivedStockList[i].Orders_Quantity
                                            
                map.set(receivedStockList[i].ProductId, {['productName']: receivedStockList[i].Product_Name,
                 ['Available_Stock']: qunatity,
                 ['Total_Stock']:  qunatity>0?qunatity:0,
                 ['soldQuantity']:  qunatity<0?qunatity:0,
                 ['productDetails']: receivedStockList[i]});
            }
            else{
                let Available_Stock = map.get(receivedStockList[i].ProductId).Available_Stock
                let soldQuantity = map.get(receivedStockList[i].ProductId).soldQuantity
                let totalStock = map.get(receivedStockList[i].ProductId).Total_Stock
                let orderQuantity = parseInt(receivedStockList[i].Orders_Quantity)
                map.set(
                    receivedStockList[i].ProductId,     
                {
                ['productName']: receivedStockList[i].Product_Name, 
                ['Available_Stock']: Available_Stock+ orderQuantity,
                ['soldQuantity'] :   +orderQuantity<0? soldQuantity + orderQuantity:soldQuantity,
                ['Total_Stock'] :   +orderQuantity>0? totalStock + orderQuantity:totalStock,
                ['productDetails']: receivedStockList[i],
                ['productCode']:receivedStockList[i].Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
                receivedStockList[i]?.ProductId.split("").slice(10).join('').toUpperCase()
            
            })
                

            
            }
        }
        let arr = [];
        for(let values of map.values()){
            arr.push(values)
        }
        res.json({ data: arr })
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = router
