const express = require('express')
const router = express.Router()

const StockOrderList=require('../../Inventory/StockOrderList/stockOrderList')





const createDailyDsrReport = (startDate,breakDate)=>{
    
    var date = startDate;
       var days = [];
       while (
       !(startDate.getMonth() === breakDate.getMonth() &&
       startDate.getYear() === breakDate.getYear() &&
       startDate.getDate() === breakDate.getDate() )) {
         days.push(new Date(date));
         date.setDate(date.getDate() + 1);          
       }
       return days;   
}


const compareDate  = (startDate,breakDate)=>{
    let startDate2 = new Date(startDate)
    let breakDate2 = new Date(breakDate)

  return   startDate2.getMonth() === breakDate2.getMonth() &&
        startDate2.getYear() === breakDate2.getYear() &&
        startDate2.getDate() === breakDate2.getDate()
}


const compareDate2  = (startDate,breakDate)=>{
    let startDate2 = new Date(startDate)
    let breakDate2 = new Date(breakDate)

  return   startDate2.getTime() <= breakDate2.getTime()
}


const dailyStockReport = (data1,data2)=>{

    const map = new Map();


    const getStockReport = (data,type)=>{
        data.forEach((el)=>{
            const qunatity =  +el.Orders_Quantity
            const stockReportObj = {
                date:new Date(),
                productName:el.Product_Name,
                openingStock:!compareDate(el[type],new Date())?qunatity:0,
                purchaseStock:compareDate(el[type],new Date()) && type==='receivedDate'?qunatity:0,
                totalStock: qunatity>0?qunatity:0,
                consumptionQty:compareDate(el[type],new Date()) &&qunatity<0?qunatity:0,
                opningConsumptionOty:!compareDate(el[type],new Date()) &&qunatity<0?qunatity:0,
                closingStock:compareDate2(new Date(el[type]),new Date().setDate(new Date().getDate()-1))?qunatity:0,
                ['productCode']:el.Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
                      el?.ProductId.split("").slice(10).join('').toUpperCase()            
            }
        
          if(!map.has(el.ProductId)){
            map.set(el.ProductId,stockReportObj)
          }else{
            let openingStock = map.get(el.ProductId).openingStock
            let purchaseStock = map.get(el.ProductId).purchaseStock
            let totalStock = map.get(el.ProductId).totalStock
            let closingStock= map.get(el.ProductId).closingStock
            let consumptionQty= map.get(el.ProductId).consumptionQty
            let opningConsumptionOty= map.get(el.ProductId).opningConsumptionOty
        
            map.set(
                el.ProductId,     
               {
                date:new Date(),
                productName:el.Product_Name,
                openingStock:!compareDate(el[type],new Date()) ?qunatity +openingStock:openingStock,
                purchaseStock:compareDate(el[type],new Date()) &&qunatity>0 && type==='receivedDate' ?qunatity +purchaseStock:purchaseStock,
                totalStock: +qunatity>0? totalStock + qunatity:totalStock,
                consumptionQty:compareDate(el[type],new Date()) &&qunatity<0?qunatity+consumptionQty:consumptionQty,
                opningConsumptionOty:!compareDate(el[type],new Date()) &&qunatity<0?qunatity+opningConsumptionOty:opningConsumptionOty,
                closingStock:compareDate2(new Date(el[type]),new Date().setDate(new Date().getDate()-1))?closingStock +qunatity:closingStock  ,
                ['productCode']:el.Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
                el?.ProductId.split("").slice(10).join('').toUpperCase()
            }
                
                )
        
          }
           })
        
    }

  getStockReport(data1,'receivedDate')
  getStockReport(data2,'Order_Date')

   
   let arr = [];
    for(let values of map.values()){
        arr.push(values)
    }
    return arr

}


router.get('/daily-stock-report',async(req,res)=>{
    try{
        const receivedStockList = await StockOrderList.find({"Status": "Recevied"})
        const soldStockList = await StockOrderList.find({"Status": "Sold"})

       
        res.status(200).json(dailyStockReport(receivedStockList,soldStockList))
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})




module.exports = router
