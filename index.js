const express=require('express')
const mongoose=require('mongoose')
const app = express();
var cors = require('cors')
const userValidate = require('./Routes/jwt')
app.use(cors())
const bodyParser=require('body-parser')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port=process.env.PORT||8000


const DailyAttendence=require('./Trainer/LiveClasses/dailyAttendence')
const MonthlyReport=require('./Trainer/LiveClasses/monthlyReport')
const ClientAttendenceReg=require('./Trainer/LiveClasses/clientAttendenceReg')
const AllBatchesDailyAttendence=require('./Trainer/AllBatches/allBatchesDailyAttendence')
const AllBatchesMonthlyReport=require('./Trainer/AllBatches/allBatchesMonthlyReport')
const AllBatchesClientAttendenceReg=require('./Trainer/AllBatches/allBatchesClientAttendenceReg')
const PTClassesDailyAttendence=require('./Trainer/PTClasses/ptClassesDailyAttendence')
const PTClassesMonthlyReport=require('./Trainer/PTClasses/ptClassesMonthlyReport')
const PTClassesClientAttendenceReg=require('./Trainer/PTClasses/ptClassesClientAttendenceReg')
const TTCClassesDailyAttendence=require('./Trainer/TTCClasses/ttcClassesDailyAttendence')
const TTCClassesMonthlyReport=require('./Trainer/TTCClasses/ttcClassesMonthlyReport')
const TTCClassesClientAttendenceReg=require('./Trainer/TTCClasses/ttcClassesClientAttendenceReg')
const AllMembersClientAttendenceReg=require('./Trainer/AllMembers/allMembersClientAttendenceReg')
//calender
const Calender=require('./Calender/calender')
//Employee target
const AllCalls=require('./Employee/allCalls')
const SalesTarget=require('./Employee/EmployeeTarget/salesTarget')
const ClientTarget=require('./Employee/EmployeeTarget/clientTarget')
const CallsTarget=require('./Employee/EmployeeTarget/callsTarget')
const LeadsTarget=require('./Employee/EmployeeTarget/leadsTarget')
const RenewalsTarget=require('./Employee/EmployeeTarget/renewalsTarget')
const ReferralsLeadsTarget=require('./Employee/EmployeeTarget/referralsLeadsTarget')
const MediaTarget=require('./Employee/EmployeeTarget/mediaTarget')
//Member Calls
const WelcomeCalls=require('./Employee/MemberCalls/welcomeCalls')
const FeedbackCalls=require('./Employee/MemberCalls/feedbackCalls')
const PaymentCalls=require('./Employee/MemberCalls/paymentCalls')
const IrregularMemberCall=require('./Employee/MemberCalls/irregularMemberCall')
const GreetingCalls=require('./Employee/MemberCalls/greetingCalls')
//sales calls
const UpgradeCalls=require('./Employee/SalesCall/upgradeCalls')
const RenewalsCalls=require('./Employee/SalesCall/renewalsCalls')
const CrossSaleCalls=require('./Employee/SalesCall/crosssaleCalls')
//Services Rate Card
const ServicesRateCard=require('./Employee/ServicesRateCard/servicesRateCard')
//Inventory
//IMP call list
const IMPCallList=require('./Inventory/IMPCallList/impCallList')
const AllSupplierList=require('./Inventory/IMPCallList/allSupplierList')
const GuestList=require('./Inventory/IMPCallList/guestList')
//Stock Listting
const Clothes=require('./Inventory/StockListing/clothes')
const AyurvedaMedicine=require('./Inventory/StockListing/ayurvedaMedicine')
const FitnessProduct=require('./Inventory/StockListing/fitnessProduct')
const FoodsProduct=require('./Inventory/StockListing/foodsProduct')
const GenerelProduct=require('./Inventory/StockListing/generelProduct')
//Stock Report
const ProductSalesReport=require('./Inventory/StockReport/productSalesReport')
//Purchase Report
const PurchaseReport=require('./Inventory/PurchaseReport/purchaseReport')
//Stock Assigning
const StockAssigning=require('./Inventory/StockAssigning/stockAssigning')
//Stock Alert
const StockAlert=require('./Inventory/StockAlert/stockAlert')
// Stock Order List
const StockOrderList=require('./Inventory/StockOrderList/stockOrderList')
//Fitness
//FitnessGoal
const AllDietClient=require('./Fitness/FitnessGoal/allDietClient')
const DietPlanTemplate=require('./Fitness/FitnessGoal/dietPlanTemplate')
const WorkoutTemplate=require('./Fitness/FitnessGoal/workoutTemplate')
const ExerciseLibrary=require('./Fitness/FitnessGoal/exerciseLibrary')
const DailyWorkoutScheduling=require('./Fitness/FitnessGoal/dailyWorkoutScheduling')
//Employee Form
const EmployeeForm=require('./Models/employeeForm')
//CRM
//Client Management
const RenewalsClient=require('./CRM/ClientManagement/renewalsClient')
const RenewedClient=require('./CRM/ClientManagement/renewedClient')
const LeftClient=require('./CRM/ClientManagement/leftClients')
const ClientSupport=require('./CRM/ClientManagement/clientSupport')
//Master
//CenterSetup
const PackageMaster=require('./Master/CenterSetup/packageMaster')
//Appointment
const Appointment=require('./Navbar/appointment')
//Marketing
const OfferMaster=require('./Marketing/offerMaster')
const BulkMailer=require('./Marketing/bulkMailer')
const BulkCalling=require('./Marketing/bulkCalling')
const CustomerReview=require('./Marketing/customerReview')
//HRManagement
const EmployeeTargetSheet=require('./HRManagement/employeeTargetSheet')
//Finance
//Invoice
const TotalInvoice=require('./Finance/Invoices/totalInvoices')
const PaidInvoice=require('./Finance/Invoices/paidInvoices')
const BalancePayment=require('./Finance/Invoices/balancePayment')
const Receipts=require('./Finance/Invoices/receipts')
const CancelledInvoice=require('./Finance/Invoices/cancelledInvoice')
const CommentsInvoice=require('./Finance/Invoices/commentsInvoice')
//Revenues
const RevenueDetails=require('./Finance/Revenues/revenueDetails')
const ServiceWiseRevenue=require('./Finance/Revenues/serviceWiseRevenue')
const RenewlsRevenue=require('./Finance/Revenues/renewlsRevenue')
const NewClientRevenue=require('./Finance/Revenues/newClientRevenue')
const LeadReport=require('./Finance/Revenues/leadReport')
const RevenueReport=require('./Finance/Revenues/revenueReport')
//Collection Report
const TotalCollection=require('./Finance/CollectionReport/totalCollection')
const paymentMode=require('./Finance/CollectionReport/paymentMode')
const CashReport=require('./Finance/CollectionReport/cashReport')
const ChequeReport=require('./Finance/CollectionReport/chequeReport');
const PaymentMode = require('./Finance/CollectionReport/paymentMode');
//Expense
const CenterExpense = require('./Finance/Expense/centerExpense');
const DailyExpense = require('./Finance/Expense/dailyExpense');
const PettyCash = require('./Finance/Expense/pettyCash');
app.use(express.json())

app.use('/enquiryForm', userValidate, require('./Routes/enquiryForm'));

//ROUTES 
app.use('/signup', require('./Routes/signup'));

// Proctected
app.use('/login', require('./Routes/login'));

app.use('/Referral', userValidate, require('./Routes/Referral'));
app.use('/Document', userValidate, require('./Routes/Document'));
app.use('/fitnessDetail', userValidate, require('./Routes/fitnessDetails'));
app.use('/dietDetail', userValidate, require('./Routes/DietDetails'));
app.use('/AppointmentClient', userValidate, require('./Routes/AppointmentClient'));

app.use('/renewedClients', userValidate, require('./Routes/renewedClients'));
app.use('/activeClients', userValidate, require('./Routes/activeClients'));
app.use('/allClients', userValidate, require('./Routes/allClients'));
app.use('/expriryClients', userValidate, require('./Routes/expriryClients'));
app.use('/Servicedata', userValidate, require('./Routes/Servicedata'));
app.use('/Payment', userValidate, require('./Routes/Payment'));
app.use('/individualMember', userValidate, require('./Routes/individualMember'));


app.use('/Batch', userValidate, require('./Routes/Batch'));
app.use('/Companyprofile', userValidate, require('./Routes/Companyprofile'));
app.use('/Package', userValidate, require('./Routes/Package'));
app.use('/offer', userValidate, require('./Routes/offer'));
app.use('/brandlogoupdate', userValidate, require('./Routes/brandlogoupdate'));
app.use('/service', userValidate, require('./Routes/service'));
app.use('/staffAttendance', userValidate, require('./Routes/staffAttentance'));
app.use('/clientAttendance', userValidate, require('./Routes/clientAttendance'));
app.use('/employeeAttendance', userValidate, require('./Routes/employeeAttendance'));
app.use('/prospect', userValidate, require('./Routes/prospect'));
app.use('/subservice', userValidate, require('./Routes/subservice'));
app.use('/memberForm', userValidate, require('./Routes/memberForm'));
app.use('/designation', userValidate, require('./Routes/designation'));

app.use('/galleryMaster', userValidate, require('./Routes/galleryMaster'));
app.use('/holidaysListMaster', userValidate, require('./Routes/holidayListMaster'));
app.use('/leadSourceMaster', userValidate, require('./Routes/leadSourceMaster'));
app.use('/taxMaster', userValidate, require('./Routes/taxMaster'));
app.use('/hrPolicyMaster', userValidate, require('./Routes/hrPolicyMaster'));
app.use('/budgetingMaster', userValidate, require('./Routes/budgetingMaster'));
app.use('/templateMaster', userValidate, require('./Routes/templateMaster'));
app.use('/expenseMaster', userValidate, require('./Routes/expenseMaster'));
app.use('/invoice', userValidate, require('./Routes/Invoice'));
app.use('/emailsms', userValidate, require('./Routes/emailSender'));
app.use('/memberCallReport', userValidate, require('./Routes/memberCallReport'));
app.use('/allProductListingMaster', userValidate, require('./Routes/allProductListingMaster'));
app.use('/inventoryListingMaster', userValidate, require('./Routes/inventoryListingMaster'));
app.use('/shiftTimeSchedule', userValidate, require('./Routes/shiftTimeSchedule'));
app.use('/stockOrderList',userValidate, require('./Routes2/StockOrder/StockOrderList'));
app.use('/stockorderlist-status-received-stock',userValidate, require('./Routes2/StockOrder/StockOrderListReport'));
app.use('/sockreport',userValidate, require('./Routes2/StockOrder/StockReport'));
// app.use('/checkIns',userValidate, require('./Routes2/checkIns'));






//admin router
const adminRoute=require('./Routes/shift-time')
app.use('/',adminRoute)

//Trainer
//Live classes
// Daily Attendence
// to create a daily attendence

app.post('/dailyattendence',async(req,res)=>{
    try{
     const dailyAttendence= await DailyAttendence.create(req.body)
     res.status(200).json(dailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/dailyattendence',async(req,res)=>{
    try{
        const dailyAttendence = await DailyAttendence.find({});
        res.status(200).json(dailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/monthlyreport',async(req,res)=>{
    try{
     const monthlyReport= await MonthlyReport.create(req.body)
     res.status(200).json(monthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/monthlyreport',async(req,res)=>{
    try{
        const monthlyReport = await MonthlyReport.find({});
        res.status(200).json(monthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a clientattendence registration
app.post('/clientattendencereg',async(req,res)=>{
    try{
     const clientAttendenceReg= await ClientAttendenceReg.create(req.body)
     res.status(200).json(clientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a clientattendence registration
app.get('/clientattendencereg',async(req,res)=>{
    try{
        const clientAttendenceReg = await ClientAttendenceReg.find({});
        res.status(200).json(clientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//All Batches

// Daily Attendence
// to create a daily attendence
app.post('/allbatchesdailyattendence',async(req,res)=>{
    try{
     const allBatchesDailyAttendence= await AllBatchesDailyAttendence.create(req.body)
     res.status(200).json(allBatchesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/allbatchesdailyattendence',async(req,res)=>{
    try{
        const allBatchesDailyAttendence = await AllBatchesDailyAttendence.find({});
        res.status(200).json(allBatchesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/allbatchesmonthlyreport',async(req,res)=>{
    try{
     const allBatchesMonthlyReport= await AllBatchesMonthlyReport.create(req.body)
     res.status(200).json(allBatchesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/allbatchesmonthlyreport',async(req,res)=>{
    try{
        const allBatchesMonthlyReport = await AllBatchesMonthlyReport.find({});
        res.status(200).json(allBatchesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a all batches clientattendence registration
app.post('/allbatchesclientattendencereg',async(req,res)=>{
    try{
     const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.create(req.body)
     res.status(200).json(allBatchesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all batches clientattendence registration
app.get('/allbatchesclientattendencereg',async(req,res)=>{
    try{
        const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.find({});
        res.status(200).json(allBatchesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//PT Classes

// Daily Attendence
// to create a pt classes daily attendence
app.post('/ptclassesdailyattendence',async(req,res)=>{
    try{
     const ptClassesDailyAttendence= await PTClassesDailyAttendence.create(req.body)
     res.status(200).json(ptClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/ptclassesdailyattendence',async(req,res)=>{
    try{
        const ptClassesDailyAttendence = await PTClassesDailyAttendence.find({});
        res.status(200).json(ptClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a pt classes monthly report
app.post('/ptclassesmonthlyreport',async(req,res)=>{
    try{
     const ptClassesMonthlyReport= await PTClassesMonthlyReport.create(req.body)
     res.status(200).json(ptClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes monthly report
app.get('/ptclassesmonthlyreport',async(req,res)=>{
    try{
        const ptClassesMonthlyReport = await PTClassesMonthlyReport.find({});
        res.status(200).json(ptClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a pt classes clientattendence registration
app.post('/ptclassesclientattendencereg',async(req,res)=>{
    try{
     const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ptClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes clientattendence registration
app.get('/ptclassesclientattendencereg',async(req,res)=>{
    try{
        const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.find({});
        res.status(200).json(ptClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//TTC Classes

// Daily Attendence
// to create a ttc classes daily attendence
app.post('/ttclasses/dailyattendence',async(req,res)=>{
    try{
     const ttcClassesDailyAttendence= await TTCClassesDailyAttendence.create(req.body)
     res.status(200).json(ttcClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes daily attendence
app.get('/ttclasses/dailyattendence',async(req,res)=>{
    try{
        const ttcClassesDailyAttendence = await TTCClassesDailyAttendence.find({});
        res.status(200).json(ttcClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a ttc classes monthly report
app.post('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
     const ttcClassesMonthlyReport= await TTCClassesMonthlyReport.create(req.body)
     res.status(200).json(ttcClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes monthly report
app.get('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
        const ttcClassesMonthlyReport = await TTCClassesMonthlyReport.find({});
        res.status(200).json(ttcClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a ttc classes clientattendence registration
app.post('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
     const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ttcClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes clientattendence registration
app.get('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
        const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.find({});
        res.status(200).json(ttcClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//All Members


// ClientAttendenceReg
// to create a all members clientattendence registration
app.post('/allmembers/clientattendencereg',async(req,res)=>{
    try{
     const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.create(req.body)
     res.status(200).json(allMembersClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all members clientattendence registration
app.get('/allmembers/clientattendencereg',async(req,res)=>{
    try{
        const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.find({});
        res.status(200).json(allMembersClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//calender
//to create calender
app.post('/calender',async(req,res)=>{
    try{
     const calender= await Calender.create(req.body)
     res.status(200).json(calender);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get calender
 app.get('/calender',async(req,res)=>{
    try{
        const calender= await Calender.find({});
        res.status(200).json(calender);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get calender by id
app.get('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findById(id);
        res.status(200).json(calender);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update calender
app.put('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!calender){
            return res.status(404).json({message:`cannot find any calender with ${id}`})
        }
        const updatedCalender = await Calender.findById(id);
        res.status(200).json(updatedCalender);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a calender
app.delete('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!calender){
            return res.status(404).json({message:`cannot find any calender with ${id}`})
        }
        
        res.status(200).json(calender);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Employee

//Employee Target

//Sales Target
//to create sales target

app.post('/salestarget',async(req,res)=>{
    try{
     const salesTarget= await SalesTarget.create(req.body)
     res.status(200).json(salesTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get sales target
 app.get('/salestarget',async(req,res)=>{
    try{
        const salesTarget= await SalesTarget.find({});
        res.status(200).json(salesTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get salesTarget by id
app.get('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findById(id);
        res.status(200).json(salesTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update sales target
app.put('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!salesTarget){
            return res.status(404).json({message:`cannot find any sales target with ${id}`})
        }
        const updatedSalesTarget = await SalesTarget.findById(id);
        res.status(200).json(updatedSalesTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a sales target
app.delete('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!salesTarget){
            return res.status(404).json({message:`cannot find any sales target with ${id}`})
        }
        
        res.status(200).json(salesTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Client Target
//to create client target

app.post('/clienttarget',async(req,res)=>{
    try{
     const clientTarget= await ClientTarget.create(req.body)
     res.status(200).json(clientTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get client target
 app.get('/clienttarget',async(req,res)=>{
    try{
        const clientTarget= await ClientTarget.find({});
        res.status(200).json(clientTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get client target by id
app.get('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget = await ClientTarget.findById(id);
        res.status(200).json(clientTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update client target
app.put('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget= await ClientTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!clientTarget){
            return res.status(404).json({message:`cannot find any client target with ${id}`})
        }
        const updatedClientTarget = await ClientTarget.findById(id);
        res.status(200).json(updatedClientTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a client target
app.delete('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget = await ClientTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!clientTarget){
            return res.status(404).json({message:`cannot find any client target with ${id}`})
        }
        
        res.status(200).json(clientTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Calls Target
//to create calls target

app.post('/callstarget',async(req,res)=>{
    try{
     const callsTarget= await CallsTarget.create(req.body)
     res.status(200).json(callsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get calls target
 app.get('/callstarget',async(req,res)=>{
    try{
        const callsTarget= await CallsTarget.find({});
        res.status(200).json(callsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get calls target by id
app.get('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget = await CallsTarget.findById(id);
        res.status(200).json(callsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update calls target
app.put('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget= await CallsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!callsTarget){
            return res.status(404).json({message:`cannot find any calls target with ${id}`})
        }
        const updatedCallsTarget = await CallsTarget.findById(id);
        res.status(200).json(updatedCallsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a calls target
app.delete('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget = await CallsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!callsTarget){
            return res.status(404).json({message:`cannot find any calls target with ${id}`})
        }
        
        res.status(200).json(callsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Leads Target
//to create leads target

app.post('/leadstarget',async(req,res)=>{
    try{
     const leadsTarget= await LeadsTarget.create(req.body)
     res.status(200).json(leadsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get leads target
 app.get('/leadsTarget',async(req,res)=>{
    try{
        const leadsTarget= await LeadsTarget.find({});
        res.status(200).json(leadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  leads target by id
app.get('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget = await LeadsTarget.findById(id);
        res.status(200).json(leadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update leads target
app.put('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget= await LeadsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!leadsTarget){
            return res.status(404).json({message:`cannot find any leads target with ${id}`})
        }
        const updatedLeadsTarget = await LeadsTarget.findById(id);
        res.status(200).json(updatedLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a leads target
app.delete('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget = await LeadsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!leadsTarget){
            return res.status(404).json({message:`cannot find any leads target with ${id}`})
        }
        
        res.status(200).json(leadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//Renewals Target
//to create Renewals target

app.post('/renewalstarget',async(req,res)=>{
    try{
     const renewalsTarget= await RenewalsTarget.create(req.body)
     res.status(200).json(renewalsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Renewals target
 app.get('/renewalstarget',async(req,res)=>{
    try{
        const renewalsTarget= await RenewalsTarget.find({});
        res.status(200).json(renewalsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get renewals target by id
app.get('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget = await RenewalsTarget.findById(id);
        res.status(200).json(renewalsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update renewals target
app.put('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget= await RenewalsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewalsTarget){
            return res.status(404).json({message:`cannot find any renewals target with ${id}`})
        }
        const updatedRenewalsTarget = await RenewalsTarget.findById(id);
        res.status(200).json(updatedRenewalsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a renewals target
app.delete('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget = await RenewalsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewalsTarget){
            return res.status(404).json({message:`cannot find any renewals target with ${id}`})
        }
        
        res.status(200).json(renewalsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Referral Leads Target
//to create Referral Leads target

app.post('/referralsleadstarget',async(req,res)=>{
    try{
     const referralLeadsTarget= await ReferralsLeadsTarget.create(req.body)
     res.status(200).json(referralLeadsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Referral Leads target
 app.get('/referralsLeadsTarget',async(req,res)=>{
    try{
        const referralsLeadsTarget= await ReferralsLeadsTarget.find({});
        res.status(200).json(referralsLeadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get referral Leads target by id
app.get('/referralsLeadsTarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget = await ReferralsLeadsTarget.findById(id);
        res.status(200).json(referralsLeadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update referral leads Target
app.put('/referralsleadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget= await ReferralsLeadsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!referralsLeadsTarget){
            return res.status(404).json({message:`cannot find any referrals lrad target with ${id}`})
        }
        const updatedReferralsLeadsTarget = await ReferralsLeadsTarget.findById(id);
        res.status(200).json(updatedReferralsLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a referral leads target
app.delete('/referralsleadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget = await ReferralsLeadsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!referralsLeadsTarget){
            return res.status(404).json({message:`cannot find any referrals leads target with ${id}`})
        }
        
        res.status(200).json(referralsLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//media Target
//to create media target

app.post('/mediatarget',async(req,res)=>{
    try{
     const mediaTarget= await MediaTarget.create(req.body)
     res.status(200).json(mediaTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get media target
 app.get('/mediatarget',async(req,res)=>{
    try{
        const mediaTarget= await MediaTarget.find({});
        res.status(200).json(mediaTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get media target by id
app.get('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget = await MediaTarget.findById(id);
        res.status(200).json(mediaTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update media Target
app.put('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget= await MediaTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!mediaTarget){
            return res.status(404).json({message:`cannot find any media target with ${id}`})
        }
        const updatedmediaTarget = await MediaTarget.findById(id);
        res.status(200).json(updatedmediaTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a media target
app.delete('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget = await MediaTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!mediaTarget){
            return res.status(404).json({message:`cannot find any media target with ${id}`})
        }
        
        res.status(200).json(mediaTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Member Calls

// welcome calls

//to create welcome calls

app.post('/welcomecalls',async(req,res)=>{
    try{
     const welcomeCalls= await WelcomeCalls.create(req.body)
     res.status(200).json(welcomeCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get welcome calls
 app.get('/welcomecalls',async(req,res)=>{
    try{
        const welcomeCalls= await WelcomeCalls.find({});
        res.status(200).json(welcomeCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get welcome calls by id
app.get('/welcomecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const welcomeCalls = await WelcomeCalls.findById(id);
        res.status(200).json(welcomeCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update welcome calls
app.put('/welcomecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const welcomeCalls= await WelcomeCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!welcomeCalls){
            return res.status(404).json({message:`cannot find any welcome calls with ${id}`})
        }
        const updatedWelcomeCalls = await WelcomeCalls.findById(id);
        res.status(200).json(updatedWelcomeCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a welcome calls
app.delete('/welcomecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const welcomeCalls = await WelcomeCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!welcomeCalls){
            return res.status(404).json({message:`cannot find any welcome calls with ${id}`})
        }
        
        res.status(200).json(welcomeCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// feedback calls

//to create feedback calls

app.post('/feedbackcalls',async(req,res)=>{
    try{
     const feedbackCalls= await FeedbackCalls.create(req.body)
     res.status(200).json( feedbackCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get feedback calls
 app.get('/feedbackcalls',async(req,res)=>{
    try{
        const  feedbackCalls= await  FeedbackCalls.find({});
        res.status(200).json( feedbackCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get feedback calls by id
app.get('/feedbackcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  feedbackCalls = await  FeedbackCalls.findById(id);
        res.status(200).json( feedbackCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update feedback calls
app.put('/feedbackcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  feedbackCalls= await  FeedbackCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(! feedbackCalls){
            return res.status(404).json({message:`cannot find any feedback calls with ${id}`})
        }
        const updatedFeedbackCalls = await  FeedbackCalls.findById(id);
        res.status(200).json(updatedFeedbackCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a feedback calls
app.delete('/feedbackcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  feedbackCalls = await  FeedbackCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(! feedbackCalls){
            return res.status(404).json({message:`cannot find any feedback calls with ${id}`})
        }
        
        res.status(200).json( feedbackCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// Payment calls

//to create payment calls

app.post('/paymentcalls',async(req,res)=>{
    try{
     const paymentCalls= await PaymentCalls.create(req.body)
     res.status(200).json( paymentCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get payment calls
 app.get('/paymentcalls',async(req,res)=>{
    try{
        const  paymentCalls= await  PaymentCalls.find({});
        res.status(200).json( paymentCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get payment calls by id
app.get('/paymentcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  paymentCalls = await  PaymentCalls.findById(id);
        res.status(200).json( paymentCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update payment calls
app.put('/paymentcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  paymentCalls= await  PaymentCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(! paymentCalls){
            return res.status(404).json({message:`cannot find any payment calls with ${id}`})
        }
        const updatedPaymentCalls = await  PaymentCalls.findById(id);
        res.status(200).json(updatedPaymentCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a payment calls
app.delete('/paymentcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  paymentCalls = await  PaymentCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(! paymentCalls){
            return res.status(404).json({message:`cannot find any payment calls with ${id}`})
        }
        
        res.status(200).json( paymentCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Irregular Member calls

//to create irregular member calls

app.post('/irregularcall',async(req,res)=>{
    try{
     const irregularMemberCall= await IrregularMemberCall.create(req.body)
     res.status(200).json( irregularMemberCall);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get irregular calls
 app.get('/irregularcall',async(req,res)=>{
    try{
        const  irregularMemberCall= await  IrregularMemberCall.find({});
        res.status(200).json( irregularMemberCall);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get irregular calls by id
app.get('/irregularcall/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  irregularMemberCall = await  IrregularMemberCall.findById(id);
        res.status(200).json( irregularMemberCall);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update irregular calls by id
app.put('/irregularcall/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  irregularMemberCall= await  IrregularMemberCall.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(! irregularMemberCall){
            return res.status(404).json({message:`cannot find any irregular member calls with ${id}`})
        }
        const updatedIrregularMembercalls = await  IrregularMemberCall.findById(id);
        res.status(200).json(updatedIrregularMembercalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a irregular member calls
app.delete('/irregularcall/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  irregularMemberCall = await  IrregularMemberCall.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(! irregularMemberCall){
            return res.status(404).json({message:`cannot find any irregular member calls with ${id}`})
        }
        
        res.status(200).json( irregularMemberCall);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// Greeting calls

//to create greeting calls

app.post('/greetingcalls',async(req,res)=>{
    try{
     const greetingCalls= await GreetingCalls.create(req.body)
     res.status(200).json( greetingCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get greeting calls
 app.get('/greetingcalls',async(req,res)=>{
    try{
        const  greetingCalls= await  GreetingCalls.find({});
        res.status(200).json( greetingCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get greeting calls by id
app.get('/greetingcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  greetingCalls = await  GreetingCalls.findById(id);
        res.status(200).json( greetingCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update greeting calls by id
app.put('/greetingcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  greetingCalls= await  GreetingCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(! greetingCalls){
            return res.status(404).json({message:`cannot find any greeting calls with ${id}`})
        }
        const updatedGreetingCalls = await  GreetingCalls.findById(id);
        res.status(200).json(updatedGreetingCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a greeting calls
app.delete('/greetingcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  greetingCalls = await  GreetingCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(! greetingCalls){
            return res.status(404).json({message:`cannot find any greeting calls with ${id}`})
        }
        
        res.status(200).json( greetingCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Sales Call

// Upgrade calls

//to create upgrade calls

app.post('/upgradecalls',async(req,res)=>{
    try{
     const upgradeCalls= await UpgradeCalls.create(req.body)
     res.status(200).json( upgradeCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get upgrade calls
 app.get('/upgradecalls',async(req,res)=>{
    try{
        const  upgradeCalls= await  UpgradeCalls.find({});
        res.status(200).json( upgradeCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get upgrade calls by id
app.get('/upgradecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  upgradeCalls = await  UpgradeCalls.findById(id);
        res.status(200).json( upgradeCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update upgrade calls by id
app.put('/upgradecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  upgradeCalls= await  UpgradeCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(! upgradeCalls){
            return res.status(404).json({message:`cannot find any upgrade calls with ${id}`})
        }
        const updatedUpgradeCalls = await  UpgradeCalls.findById(id);
        res.status(200).json(updatedUpgradeCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a upgrade calls
app.delete('/upgradecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const  upgradeCalls = await  UpgradeCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(! upgradeCalls){
            return res.status(404).json({message:`cannot find any upgrade calls with ${id}`})
        }
        
        res.status(200).json( upgradeCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// Renewals calls

//to create renewals calls

app.post('/renewalscalls',async(req,res)=>{
    try{
     const renewalsCalls= await RenewalsCalls.create(req.body)
     res.status(200).json(  renewalsCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get renewals calls
 app.get('/renewalscalls',async(req,res)=>{
    try{
        const   renewalsCalls= await  RenewalsCalls.find({});
        res.status(200).json(renewalsCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get renewals calls by id
app.get('/renewalscalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsCalls = await  RenewalsCalls.findById(id);
        res.status(200).json(  renewalsCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update renewals calls by id
app.put('/renewalscalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsCalls= await  RenewalsCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewalsCalls){
            return res.status(404).json({message:`cannot find any renewals calls with ${id}`})
        }
        const updatedRenewalsCalls = await  RenewalsCalls.findById(id);
        res.status(200).json(updatedRenewalsCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a renewals calls
app.delete('/renewalscalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsCalls = await  RenewalsCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewalsCalls){
            return res.status(404).json({message:`cannot find any renewals calls with ${id}`})
        }
        
        res.status(200).json(renewalsCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// Crosssale calls

//to create Crosssale calls

app.post('/crosssalecalls',async(req,res)=>{
    try{
     const crossSaleCalls= await CrossSaleCalls.create(req.body)
     res.status(200).json(crossSaleCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get cross sale calls
 app.get('/crosssalecalls',async(req,res)=>{
    try{
        const   crossSaleCalls= await  CrossSaleCalls.find({});
        res.status(200).json(crossSaleCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get cross sale calls by id
app.get('/crosssalecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   crossSaleCalls = await  CrossSaleCalls.findById(id);
        res.status(200).json(  crossSaleCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update cross sale calls by id
app.put('/crosssalecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   crossSaleCalls= await  CrossSaleCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!crossSaleCalls){
            return res.status(404).json({message:`cannot find any cross sale calls with ${id}`})
        }
        const updatedCrossSaleCalls = await  CrossSaleCalls.findById(id);
        res.status(200).json(updatedCrossSaleCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a cross sale calls
app.delete('/crosssalecalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   crossSaleCalls = await  CrossSaleCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!crossSaleCalls){
            return res.status(404).json({message:`cannot find any cross sale calls with ${id}`})
        }
        
        res.status(200).json(crossSaleCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



// Services Rate Card

//to create Services Rate Card

app.post('/servicesratecard',async(req,res)=>{
    try{
     const servicesRateCard= await ServicesRateCard.create(req.body)
     res.status(200).json(servicesRateCard);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Services Rate  Card
 app.get('/servicesratecard',async(req,res)=>{
    try{
        const   servicesRateCard= await  ServicesRateCard.find({});
        res.status(200).json(servicesRateCard);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get services rate card by id
app.get('/servicesratecard/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   servicesRateCard = await  ServicesRateCard.findById(id);
        res.status(200).json(servicesRateCard);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update services rate card by id
app.put('/servicesratecard/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   servicesRateCard= await  ServicesRateCard.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!servicesRateCard){
            return res.status(404).json({message:`cannot find any cross sale calls with ${id}`})
        }
        const updatedServicesRateCard = await  ServicesRateCard.findById(id);
        res.status(200).json(updatedServicesRateCard);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a services rate card
app.delete('/servicesratecard/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   servicesRateCard = await  ServicesRateCard.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!servicesRateCard){
            return res.status(404).json({message:`cannot find any services rate card with ${id}`})
        }
        
        res.status(200).json(servicesRateCard);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



// Inventory
// IMPCallList

//Imp call List
//to create imp call list
app.post('/impcalllist',async(req,res)=>{
    try{
     const impCallList= await IMPCallList.create(req.body)
     res.status(200).json(impCallList);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get imp call list
 app.get('/impcalllist',async(req,res)=>{
    try{
        const   impCallList= await  IMPCallList.find({});
        res.status(200).json(impCallList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get imp call list by id
app.get('/impcalllist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   impCallList = await  IMPCallList.findById(id);
        res.status(200).json(  impCallList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update imp call list by id
app.put('/impcalllist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   impCallList= await  IMPCallList.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!impCallList){
            return res.status(404).json({message:`cannot find any imp call list with ${id}`})
        }
        const updatedIMPCallList = await  IMPCallList.findById(id);
        res.status(200).json(updatedIMPCallList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a imp call list
app.delete('/impcalllist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   impCallList = await  IMPCallList.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!impCallList){
            return res.status(404).json({message:`cannot find any imp call list with ${id}`})
        }
        
        res.status(200).json(impCallList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//All Supplier List
//to create all supplier list
app.post('/allsupplierlist',async(req,res)=>{
    try{
     const allSupplierList= await AllSupplierList.create(req.body)
     res.status(200).json(allSupplierList);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get all supplier list
 app.get('/allsupplierlist',async(req,res)=>{
    try{
        const   allSupplierList= await  AllSupplierList.find({});
        res.status(200).json(allSupplierList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get all supplier list by id
app.get('/allsupplierlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allSupplierList = await  AllSupplierList.findById(id);
        res.status(200).json(  allSupplierList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update all supplier list list by id
app.put('/allsupplierlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allSupplierList= await  AllSupplierList.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!allSupplierList){
            return res.status(404).json({message:`cannot find any all supplier list with ${id}`})
        }
        const updatedAllSupplierList = await  AllSupplierList.findById(id);
        res.status(200).json(updatedAllSupplierList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a all supplier list
app.delete('/allsupplierlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allSupplierList = await  AllSupplierList.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!allSupplierList){
            return res.status(404).json({message:`cannot find any all supplier list with ${id}`})
        }
        
        res.status(200).json(allSupplierList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Guest List
//to create guest list
app.post('/guestlist',async(req,res)=>{
    try{
     const guestList= await GuestList.create(req.body)
     res.status(200).json(guestList);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get guest  list
 app.get('/guestlist',async(req,res)=>{
    try{
        const   guestList= await  GuestList.find({});
        res.status(200).json(guestList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get guest list by id
app.get('/guestlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   guestList = await  GuestList.findById(id);
        res.status(200).json(  guestList);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update guest list by id
app.put('/guestlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   guestList= await  GuestList.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!guestList){
            return res.status(404).json({message:`cannot find any guest list with ${id}`})
        }
        const updatedGuestList = await  GuestList.findById(id);
        res.status(200).json( updatedGuestList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a guest list
app.delete('/guestlist/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   guestList = await  GuestList.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!guestList){
            return res.status(404).json({message:`cannot find any guest list with ${id}`})
        }
        
        res.status(200).json(guestList);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Stock Listing
//Clothes
//to create clothes
app.post('/clothes',async(req,res)=>{
    try{
     const clothes= await Clothes.create(req.body)
     res.status(200).json(clothes);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get clothes
 app.get('/clothes',async(req,res)=>{
    try{
        const   clothes= await  Clothes.find({});
        res.status(200).json(clothes);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get clothes by id
app.get('/clothes/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clothes = await  Clothes.findById(id);
        res.status(200).json(  clothes);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update clothes by id
app.put('/clothes/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clothes= await  Clothes.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!clothes){
            return res.status(404).json({message:`cannot find any clothes with ${id}`})
        }
        const updatedClothes = await  Clothes.findById(id);
        res.status(200).json( updatedClothes);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a clothes
app.delete('/clothes/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clothes = await  Clothes.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!clothes){
            return res.status(404).json({message:`cannot find any clothes with ${id}`})
        }
        
        res.status(200).json(clothes);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//AyurvedaMedicine
//to create Ayurveda medicine
app.post('/ayurvedamedicine',async(req,res)=>{
    try{
     const ayurvedaMedicine= await AyurvedaMedicine.create(req.body)
     res.status(200).json(ayurvedaMedicine);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Ayurveda Medicine
 app.get('/ayurvedaMedicine',async(req,res)=>{
    try{
        const  ayurvedaMedicine= await  AyurvedaMedicine.find({});
        res.status(200).json(ayurvedaMedicine);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get ayurveda medicine by id
app.get('/ayurvedaMedicine/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   ayurvedaMedicine = await  AyurvedaMedicine.findById(id);
        res.status(200).json( ayurvedaMedicine);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update ayurveda medicine by id
app.put('/ayurvedamedicine/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   ayurvedaMedicine= await  AyurvedaMedicine.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!ayurvedaMedicine){
            return res.status(404).json({message:`cannot find any ayurveda medicine with ${id}`})
        }
        const updatedAyurvedaMedicine = await  AyurvedaMedicine.findById(id);
        res.status(200).json( updatedAyurvedaMedicine);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a ayurveda medicine
app.delete('/ayurvedamedicine/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   ayurvedaMedicine = await  AyurvedaMedicine.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!ayurvedaMedicine){
            return res.status(404).json({message:`cannot find any ayurveda medicine with ${id}`})
        }
        
        res.status(200).json(ayurvedaMedicine);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Fitness Product
//to create fitness Product
app.post('/fitnessproduct',async(req,res)=>{
    try{
     const fitnessProduct= await FitnessProduct.create(req.body)
     res.status(200).json(fitnessProduct);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get fitness product
 app.get('/fitnessproduct',async(req,res)=>{
    try{
        const  fitnessProduct= await  FitnessProduct.find({});
        res.status(200).json(fitnessProduct);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get fitness product by id
app.get('/fitnessproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   fitnessProduct = await  FitnessProduct.findById(id);
        res.status(200).json( fitnessProduct);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update fitness product by id
app.put('/fitnessproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   fitnessProduct= await  FitnessProduct.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!fitnessProduct){
            return res.status(404).json({message:`cannot find any  fitness product with ${id}`})
        }
        const updatedFitnessProduct = await  FitnessProduct.findById(id);
        res.status(200).json( updatedFitnessProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a fitness product
app.delete('/fitnessproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   fitnessProduct = await  FitnessProduct.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!fitnessProduct){
            return res.status(404).json({message:`cannot find any  fitness product with ${id}`})
        }
        
        res.status(200).json(fitnessProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Foods Product
//to create foods Product
app.post('/foodsproduct',async(req,res)=>{
    try{
     const foodsProduct= await FoodsProduct.create(req.body)
     res.status(200).json(foodsProduct);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get foods product
 app.get('/foodsproduct',async(req,res)=>{
    try{
        const  foodsProduct= await  FoodsProduct.find({});
        res.status(200).json(foodsProduct);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get foods product by id
app.get('/foodsproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   foodsProduct = await  FoodsProduct.findById(id);
        res.status(200).json( foodsProduct);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update foods product by id
app.put('/foodsproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   foodsProduct= await  FoodsProduct.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!foodsProduct){
            return res.status(404).json({message:`cannot find any foods product with ${id}`})
        }
        const updatedFoodsProduct = await  FoodsProduct.findById(id);
        res.status(200).json( updatedFoodsProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a foods product
app.delete('/foodsproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   foodsProduct = await  FoodsProduct.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!foodsProduct){
            return res.status(404).json({message:`cannot find any foods product with ${id}`})
        }
        
        res.status(200).json(foodsProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Generel Product
//to create generel Product
app.post('/generelproduct',async(req,res)=>{
    try{
     const generelProduct= await GenerelProduct.create(req.body)
     res.status(200).json(generelProduct);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get generel Product
 app.get('/generelproduct',async(req,res)=>{
    try{
        const  generelProduct= await  GenerelProduct.find({});
        res.status(200).json( generelProduct);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get generel Product by id
app.get('/generelproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   generelProduct = await  GenerelProduct.findById(id);
        res.status(200).json( generelProduct);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update generel product by id
app.put('/generelproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   generelProduct= await  GenerelProduct.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!generelProduct){
            return res.status(404).json({message:`cannot find any generel product with ${id}`})
        }
        const updatedGenerelProduct = await  GenerelProduct.findById(id);
        res.status(200).json( updatedGenerelProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a generel product
app.delete('/generelproduct/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   generelProduct = await  GenerelProduct.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!generelProduct){
            return res.status(404).json({message:`cannot find any generel product with ${id}`})
        }
        
        res.status(200).json(generelProduct);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Stock Report
//Product sales report
//to create Product sales report
app.post('/productsalesreport',async(req,res)=>{
    try{
     const productSalesReport= await ProductSalesReport.create(req.body)
     res.status(200).json(productSalesReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })



 //to get Product sales report
 app.get('/productsalesreport',async(req,res)=>{
    try{
        const  productSalesReport= await  ProductSalesReport.find({});
        res.status(200).json( productSalesReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get product SalesReportby id
app.get('/productsalesreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   productSalesReport = await  ProductSalesReport.findById(id);
        res.status(200).json( productSalesReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update product Sales Reportby id
app.put('/productsalesreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   productSalesReport= await  ProductSalesReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!productSalesReport){
            return res.status(404).json({message:`cannot find any product Sales Report with ${id}`})
        }
        const updatedProductSalesReport = await  ProductSalesReport.findById(id);
        res.status(200).json( updatedProductSalesReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a product SalesReport
app.delete('/productsalesreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   productSalesReport = await  ProductSalesReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!productSalesReport){
            return res.status(404).json({message:`cannot find any product SalesReport with ${id}`})
        }
        
        res.status(200).json(productSalesReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Puchase Report
//Puchase Report
//to create Puchase Report
app.post('/purchasereport',async(req,res)=>{
    try{
     const purchaseReport= await PurchaseReport.create(req.body)
     res.status(200).json(purchaseReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get purchase report
 app.get('/purchasereport',async(req,res)=>{
    try{
        const  purchaseReport= await  PurchaseReport.find({});
        res.status(200).json( purchaseReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get purchase Report by id
app.get('/purchasereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   purchaseReport = await  PurchaseReport.findById(id);
        res.status(200).json( purchaseReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update purchase Report by id
app.put('/purchasereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   purchaseReport= await  PurchaseReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!purchaseReport){
            return res.status(404).json({message:`cannot find any purchase Report with ${id}`})
        }
        const updatedPurchaseReport = await  PurchaseReport.findById(id);
        res.status(200).json( updatedPurchaseReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a purchase report
app.delete('/purchasereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   purchaseReport = await  PurchaseReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!purchaseReport){
            return res.status(404).json({message:`cannot find any purchase Report with ${id}`})
        }
        
        res.status(200).json(purchaseReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Stock Assigning
//Stock Assigning
//to create Stock Assigning
app.post('/stockassigning',async(req,res)=>{
    try{
     const stockAssigning= await StockAssigning.create(req.body)
     res.status(200).json(stockAssigning);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get stock Assigning
 app.get('/stockassigning',async(req,res)=>{
    try{
        const  stockAssigning= await  StockAssigning.find({});
        res.status(200).json( stockAssigning);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get stock Assigning by id
app.get('/stockassigning/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAssigning = await  StockAssigning.findById(id);
        res.status(200).json( stockAssigning);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update stock Assigning by id
app.put('/stockassigning/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAssigning= await  StockAssigning.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!stockAssigning){
            return res.status(404).json({message:`cannot find any stock Assigning with ${id}`})
        }
        const updatedStockAssigning = await  StockAssigning.findById(id);
        res.status(200).json( updatedStockAssigning);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a stock Assigning
app.delete('/stockassigning/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAssigning = await  StockAssigning.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!stockAssigning){
            return res.status(404).json({message:`cannot find any stock Assigning with ${id}`})
        }
        
        res.status(200).json(stockAssigning);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Stock Alert
//Stock Alert
//to create Stock Alert
app.post('/stockalert',async(req,res)=>{
    try{
     const stockAlert= await StockAlert.create(req.body)
     res.status(200).json(stockAlert);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get stock Alert
 app.get('/stockalert',async(req,res)=>{
    try{
        const  stockAlert= await  StockAlert.find({});
        res.status(200).json( stockAlert);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get stock Alert by id
app.get('/stockalert/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAlert = await  StockAlert.findById(id);
        res.status(200).json( stockAlert);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update stock Alert by id
app.put('/stockalert/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAlert= await  StockAlert.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!stockAlert){
            return res.status(404).json({message:`cannot find any stock Alert with ${id}`})
        }
        const updatedStockAlert = await  StockAlert.findById(id);
        res.status(200).json( updatedStockAlert);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a stock Alert
app.delete('/stockalert/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   stockAlert = await  StockAlert.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!stockAlert){
            return res.status(404).json({message:`cannot find any stock Alert with ${id}`})
        }
        
        res.status(200).json(stockAlert);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Stock Order List
//Stock Order List
//to create Stock Order List
// app.post('/stockorderlist',async(req,res)=>{
//     try{
//      const stockOrderList= await StockOrderList.create(req.body)
//      res.status(200).json(stockOrderList);
//     }catch (error) {
//      console.log(error.message);
//      res.status(500).json({message:error.message})
//     }
//  })

//  //to get stockOrderList
//  app.get('/stockorderlist',async(req,res)=>{
//     try{
//         const  stockOrderList= await  StockOrderList.find({});
//         res.status(200).json( stockOrderList);
//     }catch(error){
//         res.status(5009).json({message:error.message})
//     }
// })


// app.get('/stockorderlist-status-received-stock', async(req, res) => {
//     try{
//         const receivedStockList = await StockOrderList.find({Status: "Recevied"})
//         const map = new Map();
//         for(let i=0; i<receivedStockList.length; i++){
//             if(!map.has(receivedStockList[i].ProductId)){
                     
//                 const qunatity =  +receivedStockList[i].Orders_Quantity
                                            
//                 map.set(receivedStockList[i].ProductId, {['productName']: receivedStockList[i].Product_Name,
//                  ['Available_Stock']: qunatity,
//                  ['Total_Stock']:  qunatity>0?qunatity:0,
//                  ['soldQuantity']:  qunatity<0?qunatity:0,
//                  ['productDetails']: receivedStockList[i]});
//             }
//             else{
//                 let Available_Stock = map.get(receivedStockList[i].ProductId).Available_Stock
//                 let soldQuantity = map.get(receivedStockList[i].ProductId).soldQuantity
//                 let totalStock = map.get(receivedStockList[i].ProductId).Total_Stock
//                 let orderQuantity = parseInt(receivedStockList[i].Orders_Quantity)
//                 map.set(
//                     receivedStockList[i].ProductId,     
//                 {
//                 ['productName']: receivedStockList[i].Product_Name, 
//                 ['Available_Stock']: Available_Stock+ orderQuantity,
//                 ['soldQuantity'] :   +orderQuantity<0? soldQuantity + orderQuantity:soldQuantity,
//                 ['Total_Stock'] :   +orderQuantity>0? totalStock + orderQuantity:totalStock,
//                 ['productDetails']: receivedStockList[i],
//                 ['productCode']:receivedStockList[i].Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
//                 receivedStockList[i]?.ProductId.split("").slice(10).join('').toUpperCase()
            
//             })
                

            
//             }
//         }
//         let arr = [];
//         for(let values of map.values()){
//             arr.push(values)
//         }
//         res.json({ data: arr })
//     }
//     catch(err){
//         res.status(500).json({message:err.message})
//     }
// })


// app.get('/stockorderlist-status-received', async(req, res) => {
//     try{
//         const receivedStockList = await StockOrderList.find({Status: "Recevied"})
//         res.json({
//             data: receivedStockList
//         })
//     }
//     catch(err){
//         res.status(500).json({message:err.message})
//     }
// })

//to  get stockOrderList by id
// app.get('/stockorderlist/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const   stockOrderList = await  StockOrderList.findById(id);
//         res.status(200).json( stockOrderList);
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// //to update stockOrderList by id
// app.put('/stockorderlist/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const   stockOrderList= await  StockOrderList.findByIdAndUpdate(id, req.body);
//         //we cannot find any product in database
//         if(!stockOrderList){
//             return res.status(404).json({message:`cannot find any stock Order List with ${id}`})
//         }
//         const updatedStockOrderList = await  StockOrderList.findById(id);
//         res.status(200).json( updatedStockOrderList);
        
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// delete a stock order list
// app.delete('/stockorderlist/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const   stockOrderList = await  StockOrderList.findByIdAndDelete(id, req.body);
//         //we cannot find any product in database
//         if(!stockOrderList){
//             return res.status(404).json({message:`cannot find any Stock Order List with ${id}`})
//         }
        
//         res.status(200).json(stockOrderList);
        
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

//Fitness

//Fitness Goal
// all diet client
//to create All Diet Client
app.post('/alldietclient',async(req,res)=>{
    try{
     const allDietClient= await AllDietClient.create(req.body)
     res.status(200).json(allDietClient);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get all diet client
 app.get('/alldietclient',async(req,res)=>{
    try{
        const  allDietClient= await  AllDietClient.find({});
        res.status(200).json( allDietClient);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get all diet client by id
app.get('/alldietclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allDietClient = await  AllDietClient.findById(id);
        res.status(200).json( allDietClient);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update all diet client by id
app.put('/alldietclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allDietClient= await  AllDietClient.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!allDietClient){
            return res.status(404).json({message:`cannot find any all diet client with ${id}`})
        }
        const updatedAllDietClient = await  AllDietClient.findById(id);
        res.status(200).json( updatedAllDietClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a all diet client
app.delete('/allDietClient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allDietClient = await  AllDietClient.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!allDietClient){
            return res.status(404).json({message:`cannot find any all diet client with ${id}`})
        }
        
        res.status(200).json(allDietClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Diet Plan Template
//to create Diet Plan Template
app.post('/dietplantemplate',async(req,res)=>{
    try{
     const dietPlanTemplate= await DietPlanTemplate.create(req.body)
     res.status(200).json(dietPlanTemplate);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get diet plan template
 app.get('/dietplantemplate',async(req,res)=>{
    try{
        const  dietPlanTemplate= await  DietPlanTemplate.find({});
        res.status(200).json( dietPlanTemplate);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get   diet Plan Template by id
app.get('/dietplantemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dietPlanTemplate = await  DietPlanTemplate.findById(id);
        res.status(200).json( dietPlanTemplate);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update diet Plan Template by id
app.put('/dietplantemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dietPlanTemplate= await  DietPlanTemplate.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!dietPlanTemplate){
            return res.status(404).json({message:`cannot find any diet plan template with ${id}`})
        }
        const updatedDietPlanTemplate = await  DietPlanTemplate.findById(id);
        res.status(200).json( updatedDietPlanTemplate);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a diet plan template
app.delete('/dietplantemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dietPlanTemplate = await  DietPlanTemplate.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!dietPlanTemplate){
            return res.status(404).json({message:`cannot find any diet plan template with ${id}`})
        }
        
        res.status(200).json(dietPlanTemplate);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Workout Template
//to create workout Template
app.post('/workouttemplate',async(req,res)=>{
    try{
     const workoutTemplate= await WorkoutTemplate.create(req.body)
     res.status(200).json(workoutTemplate);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get work out template
 app.get('/workouttemplate',async(req,res)=>{
    try{
        const  workoutTemplate= await  WorkoutTemplate.find({});
        res.status(200).json( workoutTemplate);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get   work out Template by id
app.get('/workouttemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   workoutTemplate = await  WorkoutTemplate.findById(id);
        res.status(200).json( workoutTemplate);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update work out template by id
app.put('/workoutTemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   workoutTemplate= await  WorkoutTemplate.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!workoutTemplate){
            return res.status(404).json({message:`cannot find any work out template with ${id}`})
        }
        const updatedWorkoutTemplate = await  WorkoutTemplate.findById(id);
        res.status(200).json( updatedWorkoutTemplate);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a work out template
app.delete('/workoutTemplate/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   workoutTemplate = await  WorkoutTemplate.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!workoutTemplate){
            return res.status(404).json({message:`cannot find any workout template template with ${id}`})
        }
        
        res.status(200).json(workoutTemplate);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Exercise Library
//to create exercise library
app.post('/exerciselibrary',async(req,res)=>{
    try{
     const exerciseLibrary= await ExerciseLibrary.create(req.body)
     res.status(200).json(exerciseLibrary);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get exercise library
 app.get('/exerciselibrary',async(req,res)=>{
    try{
        const  exerciseLibrary= await  ExerciseLibrary.find({});
        res.status(200).json( exerciseLibrary);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  exercise library by id
app.get('/exerciselibrary/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   exerciseLibrary = await  ExerciseLibrary.findById(id);
        res.status(200).json( exerciseLibrary);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update exercise Library by id
app.put('/exerciselibrary/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   exerciseLibrary= await  ExerciseLibrary.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!exerciseLibrary){
            return res.status(404).json({message:`cannot find any exercise library with ${id}`})
        }
        const updatedExerciseLibrary = await  ExerciseLibrary.findById(id);
        res.status(200).json( updatedExerciseLibrary);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a exercise Library
app.delete('/exerciseLibrary/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   exerciseLibrary = await  ExerciseLibrary.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!exerciseLibrary){
            return res.status(404).json({message:`cannot find any exercise library with ${id}`})
        }
        
        res.status(200).json(exerciseLibrary);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Daily Workout Scheduling
//to create daily workout scheduling
app.post('/dailyworkoutscheduling',async(req,res)=>{
    try{
     const dailyWorkoutScheduling= await DailyWorkoutScheduling.create(req.body)
     res.status(200).json(dailyWorkoutScheduling);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get daily workout scheduling
 app.get('/dailyworkoutscheduling',async(req,res)=>{
    try{
        const  dailyWorkoutScheduling= await  DailyWorkoutScheduling.find({});
        res.status(200).json( dailyWorkoutScheduling);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  daily workout scheduling by id
app.get('/dailyworkoutscheduling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyWorkoutScheduling = await  DailyWorkoutScheduling.findById(id);
        res.status(200).json( dailyWorkoutScheduling);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update dailyWorkout Scheduling by id
app.put('/dailyworkoutscheduling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyWorkoutScheduling= await  DailyWorkoutScheduling.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!dailyWorkoutScheduling){
            return res.status(404).json({message:`cannot find any daily workou scheduling with ${id}`})
        }
        const updatedDailyWorkoutScheduling = await  DailyWorkoutScheduling.findById(id);
        res.status(200).json( updatedDailyWorkoutScheduling);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a daily workout scheduling
app.delete('/dailyworkoutscheduling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyWorkoutScheduling = await  DailyWorkoutScheduling.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!dailyWorkoutScheduling){
            return res.status(404).json({message:`cannot find any exercise library with ${id}`})
        }
        
        res.status(200).json(dailyWorkoutScheduling);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Employee Form
//to create employee form
app.post('/employeeform',async(req,res)=>{
    try{
     const employeeForm= await EmployeeForm.create(req.body)
     res.status(200).json(employeeForm);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get employee form
 app.get('/employeeform',async(req,res)=>{
    try{
        const  employeeForm= await  EmployeeForm.find({});
        res.status(200).json( employeeForm);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  employee form by id
app.get('/employeeform/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeForm = await  EmployeeForm.findById(id);
        res.status(200).json( employeeForm);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update employee form by id
app.put('/employeeform/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeForm= await  EmployeeForm.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!employeeForm){
            return res.status(404).json({message:`cannot find any employee Form with ${id}`})
        }
        const updatedEmployeeForm = await  EmployeeForm.findById(id);
        res.status(200).json( updatedEmployeeForm);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a employee form
app.delete('/employeeform/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeForm = await  EmployeeForm.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!employeeForm){
            return res.status(404).json({message:`cannot find any employee form with ${id}`})
        }
        
        res.status(200).json(employeeForm);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//CRM
//Renewals client
//to create renewals client
app.post('/renewalsclient',async(req,res)=>{
    try{
     const renewalsClient= await RenewalsClient.create(req.body)
     res.status(200).json(renewalsClient);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get renewals Client
 app.get('/renewalsClient',async(req,res)=>{
    try{
        const  renewalsClient= await  RenewalsClient.find({});
        res.status(200).json( renewalsClient);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  renewals client by id
app.get('/renewalsclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsClient = await  RenewalsClient.findById(id);
        res.status(200).json( renewalsClient);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update renewals client by id
app.put('/renewalsclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsClient= await  RenewalsClient.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewalsClient){
            return res.status(404).json({message:`cannot find any renewals client with ${id}`})
        }
        const updatedRenewalsClient = await  RenewalsClient.findById(id);
        res.status(200).json( updatedRenewalsClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a renewals client
app.delete('/renewalsclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewalsClient = await  RenewalsClient.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewalsClient){
            return res.status(404).json({message:`cannot find any renewals client with ${id}`})
        }
        
        res.status(200).json(renewalsClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Renewed client
//to create renewed client
app.post('/renewedclient',async(req,res)=>{
    try{
     const renewedClient= await RenewedClient.create(req.body)
     res.status(200).json(renewedClient);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Renewed Client
 app.get('/renewedclient',async(req,res)=>{
    try{
        const  renewedClient= await  RenewedClient.find({});
        res.status(200).json( renewedClient);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  Renewed Client by id
app.get('/renewedclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewedClient = await  RenewedClient.findById(id);
        res.status(200).json( renewedClient);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update Renewed client by id
app.put('/renewedclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewedClient= await  RenewedClient.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewedClient){
            return res.status(404).json({message:`cannot find any renewed client with ${id}`})
        }
        const updatedRenewedClient = await  RenewedClient.findById(id);
        res.status(200).json( updatedRenewedClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a Renewed client
app.delete('/renewedclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewedClient = await  RenewedClient.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewedClient){
            return res.status(404).json({message:`cannot find any renewed client with ${id}`})
        }
        
        res.status(200).json(renewedClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Left Client
//to create left client
app.post('/leftclient',async(req,res)=>{
    try{
     const leftClient= await LeftClient.create(req.body)
     res.status(200).json(leftClient);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get left Client
 app.get('/leftclient',async(req,res)=>{
    try{
        const  leftClient= await  LeftClient.find({});
        res.status(200).json(leftClient);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  left Client by id
app.get('/leftclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leftClient = await  LeftClient.findById(id);
        res.status(200).json( leftClient);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update left client by id
app.put('/leftclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leftClient= await  LeftClient.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!leftClient){
            return res.status(404).json({message:`cannot find any left client with ${id}`})
        }
        const updatedLeftClient = await  LeftClient.findById(id);
        res.status(200).json( updatedLeftClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a Left client
app.delete('/leftclient/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leftClient = await  LeftClient.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!leftClient){
            return res.status(404).json({message:`cannot find any left client with ${id}`})
        }
        
        res.status(200).json(leftClient);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Client Support
//to create client support
app.post('/clientsupport',async(req,res)=>{
    try{
     const clientSupport= await ClientSupport.create(req.body)
     res.status(200).json(clientSupport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get client support
 app.get('/clientsupport',async(req,res)=>{
    try{
        const  clientSupport= await  ClientSupport.find({});
        res.status(200).json(clientSupport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  Client support by id
app.get('/clientsupport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clientSupport = await  ClientSupport.findById(id);
        res.status(200).json( clientSupport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update client support by id
app.put('/clientsupport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clientSupport= await  ClientSupport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!clientSupport){
            return res.status(404).json({message:`cannot find any client support with ${id}`})
        }
        const updatedClientSupport = await  ClientSupport.findById(id);
        res.status(200).json( updatedClientSupport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a client Support
app.delete('/clientsupport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   clientSupport = await  ClientSupport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!clientSupport){
            return res.status(404).json({message:`cannot find any client support with ${id}`})
        }
        
        res.status(200).json(clientSupport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Master
//CenterSetup
//Package Master
//to create package master
app.post('/packagemaster',async(req,res)=>{
    try{
     const packageMaster= await PackageMaster.create(req.body)
     res.status(200).json(packageMaster);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get package master
 app.get('/packagemaster',async(req,res)=>{
    try{
        const  packageMaster= await  PackageMaster.find({});
        res.status(200).json(packageMaster);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get package Master by id
app.get('/packagemaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   packageMaster = await  PackageMaster.findById(id);
        res.status(200).json( packageMaster);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update package master by id
app.put('/packagemaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   packageMaster= await  PackageMaster.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!packageMaster){
            return res.status(404).json({message:`cannot find any package master with ${id}`})
        }
        const updatedPackageMaster = await  PackageMaster.findById(id);
        res.status(200).json( updatedPackageMaster);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a package master
app.delete('/packagemaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   packageMaster = await  PackageMaster.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!packageMaster){
            return res.status(404).json({message:`cannot find any package master with ${id}`})
        }
        
        res.status(200).json(packageMaster);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Appointment
//to create appointent
app.post('/appointment',async(req,res)=>{
    try{
     const appointment= await Appointment.create(req.body)
     res.status(200).json(appointment);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get appointment
 app.get('/appointment',async(req,res)=>{
    try{
        const  appointment= await  Appointment.find({});
        res.status(200).json(appointment);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get appointment by id
app.get('/appointment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   appointment = await  Appointment.findById(id);
        res.status(200).json( appointment);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update appointment by id
app.put('/appointment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   appointment= await  Appointment.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!appointment){
            return res.status(404).json({message:`cannot find any appointment with ${id}`})
        }
        const updatedAppointment = await  Appointment.findById(id);
        res.status(200).json( updatedAppointment);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a appointment
app.delete('/appointment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   appointment = await  Appointment.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!appointment){
            return res.status(404).json({message:`cannot find any appointment with ${id}`})
        }
        
        res.status(200).json(appointment);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Marketing
//offer master
//to create a offer master
app.post('/offermaster',async(req,res)=>{
    try{
     const offerMaster= await OfferMaster.create(req.body)
     res.status(200).json(offerMaster);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get offermaster
 app.get('/offermaster',async(req,res)=>{
    try{
        const  offerMaster= await  OfferMaster.find({});
        res.status(200).json(offerMaster);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get offer master by id
app.get('/offermaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   offerMaster = await  OfferMaster.findById(id);
        res.status(200).json( offerMaster);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update offer master by id
app.put('/offermaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   offerMaster= await  OfferMaster.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!offerMaster){
            return res.status(404).json({message:`cannot find any offer master with ${id}`})
        }
        const updatedOfferMaster = await  OfferMaster.findById(id);
        res.status(200).json( updatedOfferMaster);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a offer master
app.delete('/offermaster/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   offerMaster = await  OfferMaster.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!offerMaster){
            return res.status(404).json({message:`cannot find any offer master with ${id}`})
        }
        
        res.status(200).json(offerMaster);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//bulk mailer
//to create a bulk mailer
app.post('/bulkmailer',async(req,res)=>{
    try{
     const bulkMailer= await BulkMailer.create(req.body)
     res.status(200).json(bulkMailer);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get bulk mailer
 app.get('/bulkmailer',async(req,res)=>{
    try{
        const  bulkMailer= await  BulkMailer.find({});
        res.status(200).json(bulkMailer);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get bulk mailer by id
app.get('/bulkmailer/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkMailer = await  BulkMailer.findById(id);
        res.status(200).json( bulkMailer);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update bulk mailer by id
app.put('/bulkmailer/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkMailer= await  BulkMailer.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!bulkMailer){
            return res.status(404).json({message:`cannot find any bulk mailer with ${id}`})
        }
        const updatedBulkMailer = await  BulkMailer.findById(id);
        res.status(200).json( updatedBulkMailer);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a bulk mailer
app.delete('/bulkmailer/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkMailer = await  BulkMailer.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!bulkMailer){
            return res.status(404).json({message:`cannot find any bulk mailer with ${id}`})
        }
        
        res.status(200).json(bulkMailer);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//bulk calling
//to create a bulk calling
app.post('/bulkcalling',async(req,res)=>{
    try{
     const bulkCalling= await BulkCalling.create(req.body)
     res.status(200).json(bulkCalling);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get bulk calling
 app.get('/bulkcalling',async(req,res)=>{
    try{
        const  bulkCalling= await  BulkCalling.find({});
        res.status(200).json(bulkCalling);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get bulk calling by id
app.get('/bulkcalling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkCalling = await  BulkCalling.findById(id);
        res.status(200).json( bulkCalling);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update bulk calling by id
app.put('/bulkcalling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkCalling= await  BulkCalling.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!bulkCalling){
            return res.status(404).json({message:`cannot find any bulk calling with ${id}`})
        }
        const updatedBulkCalling = await  BulkCalling.findById(id);
        res.status(200).json( updatedBulkCalling);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a bulk calling
app.delete('/bulkcalling/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   bulkCalling = await  BulkCalling.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!bulkCalling){
            return res.status(404).json({message:`cannot find any bulk calling with ${id}`})
        }
        
        res.status(200).json(bulkCalling);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//customer review
//to create a customer review
app.post('/customerreview',async(req,res)=>{
    try{
     const customerReview= await CustomerReview.create(req.body)
     res.status(200).json(customerReview);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get customer review
 app.get('/customerreview',async(req,res)=>{
    try{
        const  customerReview= await  CustomerReview.find({});
        res.status(200).json(customerReview);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  customer review by id
app.get('/customerreview/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   customerReview = await  CustomerReview.findById(id);
        res.status(200).json( customerReview);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update customer review by id
app.put('/customerreview/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   customerReview= await  CustomerReview.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!customerReview){
            return res.status(404).json({message:`cannot find any customer review with ${id}`})
        }
        const updatedCustomerReview = await  CustomerReview.findById(id);
        res.status(200).json( updatedCustomerReview);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a customer review
app.delete('/customerreview/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   customerReview = await  CustomerReview.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!customerReview){
            return res.status(404).json({message:`cannot find any customer review with ${id}`})
        }
        
        res.status(200).json(customerReview);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//HR Mangement
//to create a employee target sheet
app.post('/employeetargetsheet',async(req,res)=>{
    try{
     const employeeTargetSheet= await EmployeeTargetSheet.create(req.body)
     res.status(200).json(employeeTargetSheet);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get employee target sheet
 app.get('/employeetargetsheet',async(req,res)=>{
    try{
        const  employeeTargetSheet= await  EmployeeTargetSheet.find({});
        res.status(200).json(employeeTargetSheet);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  employee target sheet by id
app.get('/employeetargetsheet/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeTargetSheet = await  EmployeeTargetSheet.findById(id);
        res.status(200).json( employeeTargetSheet);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update employee target sheet by id
app.put('/employeetargetsheet/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeTargetSheet= await  EmployeeTargetSheet.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!employeeTargetSheet){
            return res.status(404).json({message:`cannot find any employee Target Sheet with ${id}`})
        }
        const updatedEmployeeTargetSheet = await  EmployeeTargetSheet.findById(id);
        res.status(200).json( updatedEmployeeTargetSheet);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a employee target sheet
app.delete('/employeetargetsheet/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeTargetSheet = await  EmployeeTargetSheet.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!employeeTargetSheet){
            return res.status(404).json({message:`cannot find any employee target sheet with ${id}`})
        }
        
        res.status(200).json(employeeTargetSheet);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Finance
//Invoices
//Total Invoices
//to create a total Invoice
app.post('/totalinvoice',async(req,res)=>{
    try{
     const totalInvoice= await TotalInvoice.create(req.body)
     res.status(200).json(totalInvoice);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get total invoice
 app.get('/totalinvoice',async(req,res)=>{
    try{
        const  totalInvoice= await  TotalInvoice.find({});
        res.status(200).json(totalInvoice);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  total invoice by id
app.get('/totalinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalInvoice = await  TotalInvoice.findById(id);
        res.status(200).json( totalInvoice);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update total invoice by id
app.put('/totalinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalInvoice= await  TotalInvoice.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!totalInvoice){
            return res.status(404).json({message:`cannot find any total invoice with ${id}`})
        }
        const updatedTotalInvoice = await  TotalInvoice.findById(id);
        res.status(200).json( updatedTotalInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a total Invoice
app.delete('/totalinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalInvoice = await  TotalInvoice.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!totalInvoice){
            return res.status(404).json({message:`cannot find any total Invoice with ${id}`})
        }
        
        res.status(200).json(totalInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Paid Invoices
//to create a paid Invoice
app.post('/paidinvoice',async(req,res)=>{
    try{
     const paidInvoice= await PaidInvoice.create(req.body)
     res.status(200).json(paidInvoice);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get paid invoice
 app.get('/paidinvoice',async(req,res)=>{
    try{
        const  paidInvoice= await  PaidInvoice.find({});
        res.status(200).json(paidInvoice);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  paid invoice by id
app.get('/paidinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paidInvoice = await  PaidInvoice.findById(id);
        res.status(200).json( paidInvoice);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update paid invoice by id
app.put('/paidinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paidInvoice= await  PaidInvoice.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!paidInvoice){
            return res.status(404).json({message:`cannot find any paid invoice with ${id}`})
        }
        const updatedPaidInvoice = await  PaidInvoice.findById(id);
        res.status(200).json( updatedPaidInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a paid Invoice
app.delete('/paidinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paidInvoice = await  PaidInvoice.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!paidInvoice){
            return res.status(404).json({message:`cannot find any paid Invoice with ${id}`})
        }
        
        res.status(200).json(paidInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Balance Payment
//to create a balance Payment
app.post('/balancepayment',async(req,res)=>{
    try{
     const balancePayment= await BalancePayment.create(req.body)
     res.status(200).json(balancePayment);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get balance Payment
 app.get('/balancepayment',async(req,res)=>{
    try{
        const  balancePayment= await  BalancePayment.find({});
        res.status(200).json(balancePayment);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  balance payment by id
app.get('/balancepayment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   balancePayment = await  BalancePayment.findById(id);
        res.status(200).json( balancePayment);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update balance payment by id
app.put('/balancepayment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   balancePayment= await  BalancePayment.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!balancePayment){
            return res.status(404).json({message:`cannot find any balance payment with ${id}`})
        }
        const updatedBalancePayment = await  BalancePayment.findById(id);
        res.status(200).json( updatedBalancePayment);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a balance payment
app.delete('/balancepayment/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   balancePayment = await  BalancePayment.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!balancePayment){
            return res.status(404).json({message:`cannot find any balance payment with ${id}`})
        }
        
        res.status(200).json(balancePayment);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Receipts
//to create a receipts
app.post('/receipts',async(req,res)=>{
    try{
     const receipts= await Receipts.create(req.body)
     res.status(200).json(receipts);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get receipts
 app.get('/receipts',async(req,res)=>{
    try{
        const  receipts= await  Receipts.find({});
        res.status(200).json(receipts);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  receipts by id
app.get('/receipts/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   receipts = await  Receipts.findById(id);
        res.status(200).json( receipts);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update receipt by id
app.put('/receipts/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   receipts= await  Receipts.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!receipts){
            return res.status(404).json({message:`cannot find any receipt with ${id}`})
        }
        const updatedReceipts = await  Receipts.findById(id);
        res.status(200).json( updatedReceipts);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a receipts
app.delete('/receipts/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   receipts = await  Receipts.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!receipts){
            return res.status(404).json({message:`cannot find any receipt with ${id}`})
        }
        
        res.status(200).json(receipts);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Cancelled Invoice
//to create a cancelled Invoice
app.post('/cancelledinvoice',async(req,res)=>{
    try{
     const cancelledInvoice= await CancelledInvoice.create(req.body)
     res.status(200).json(cancelledInvoice);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get cancelled Invoice
 app.get('/cancelledinvoice',async(req,res)=>{
    try{
        const  cancelledInvoice= await  CancelledInvoice.find({});
        res.status(200).json(cancelledInvoice);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get  cancelled Invoice by id
app.get('/cancelledinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cancelledInvoice = await  CancelledInvoice.findById(id);
        res.status(200).json( cancelledInvoice);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update cancelled Invoice by id
app.put('/cancelledinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cancelledInvoice= await  CancelledInvoice.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!cancelledInvoice){
            return res.status(404).json({message:`cannot find any cancelled Invoice  with ${id}`})
        }
        const updatedCancelledInvoice = await  CancelledInvoice.findById(id);
        res.status(200).json( updatedCancelledInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a cancelled invoice
app.delete('/cancelledinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cancelledInvoice = await  CancelledInvoice.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!cancelledInvoice){
            return res.status(404).json({message:`cannot find any cancelled Invoice with ${id}`})
        }
        
        res.status(200).json(cancelledInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Comments Invoice
//to create a Comments Invoice
app.post('/commentsinvoice',async(req,res)=>{
    try{
     const commentsInvoice= await CommentsInvoice.create(req.body)
     res.status(200).json(commentsInvoice);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get comments Invoice
 app.get('/commentsinvoice',async(req,res)=>{
    try{
        const  commentsInvoice= await  CommentsInvoice.find({});
        res.status(200).json(commentsInvoice);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get comments Invoice by id
app.get('/commentsinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   commentsInvoice = await  CommentsInvoice.findById(id);
        res.status(200).json( commentsInvoice);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update comments Invoice by id
app.put('/commentsinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   commentsInvoice= await  CommentsInvoice.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!commentsInvoice){
            return res.status(404).json({message:`cannot find any comments Invoice  with ${id}`})
        }
        const updatedCommentsInvoice = await  CommentsInvoice.findById(id);
        res.status(200).json( updatedCommentsInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a cancelled invoice
app.delete('/commentsinvoice/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   commentsInvoice = await  CommentsInvoice.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!commentsInvoice){
            return res.status(404).json({message:`cannot find any Comments Invoice with ${id}`})
        }
        
        res.status(200).json(commentsInvoice);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Revenues

//Revenue Details
//to create a Revenue Details
app.post('/revenuedetails',async(req,res)=>{
    try{
     const revenueDetails= await RevenueDetails.create(req.body)
     res.status(200).json(revenueDetails);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get revenue Details
 app.get('/revenuedetails',async(req,res)=>{
    try{
        const  revenueDetails= await  RevenueDetails.find({});
        res.status(200).json(revenueDetails);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get revenue Details by id
app.get('/revenuedetails/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueDetails = await  RevenueDetails.findById(id);
        res.status(200).json( revenueDetails);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update revenue Details by id
app.put('/revenuedetails/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueDetails= await  RevenueDetails.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!revenueDetails){
            return res.status(404).json({message:`cannot find any Revenue Details  with ${id}`})
        }
        const updatedRevenueDetails = await  RevenueDetails.findById(id);
        res.status(200).json( updatedRevenueDetails);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a revenue details
app.delete('/revenuedetails/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueDetails = await  RevenueDetails.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!revenueDetails){
            return res.status(404).json({message:`cannot find any Revenue Details with ${id}`})
        }
        
        res.status(200).json(revenueDetails);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Renewls Revenue
//to create a Renewls Revenue
app.post('/renewlsrevenue',async(req,res)=>{
    try{
     const renewlsRevenue= await RenewlsRevenue.create(req.body)
     res.status(200).json(renewlsRevenue);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get revenue Details
 app.get('/renewlsrevenue',async(req,res)=>{
    try{
        const  renewlsRevenue= await  RenewlsRevenue.find({});
        res.status(200).json(renewlsRevenue);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get revenue Details by id
app.get('/renewlsrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewlsRevenue = await  RenewlsRevenue.findById(id);
        res.status(200).json( renewlsRevenue);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update revenue Details by id
app.put('/renewlsrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewlsRevenue= await  RenewlsRevenue.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewlsRevenue){
            return res.status(404).json({message:`cannot find any Renewls Revenue with ${id}`})
        }
        const updatedRenewlsRevenue = await  RenewlsRevenue.findById(id);
        res.status(200).json( updatedRenewlsRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a Renewls Revenue
app.delete('/renewlsrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   renewlsRevenue = await  RenewlsRevenue.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewlsRevenue){
            return res.status(404).json({message:`cannot find any Renewls Revenue with ${id}`})
        }
        
        res.status(200).json(renewlsRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Service Wise Revenue
//to create a Service Wise Revenue
app.post('/servicewiserevenue',async(req,res)=>{
    try{
     const serviceWiseRevenue= await ServiceWiseRevenue.create(req.body)
     res.status(200).json(serviceWiseRevenue);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get serviceWise Revenue
 app.get('/servicewiserevenue',async(req,res)=>{
    try{
        const  serviceWiseRevenue= await  ServiceWiseRevenue.find({});
        res.status(200).json(serviceWiseRevenue);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get servicewiserevenue by id
app.get('/servicewiserevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   serviceWiseRevenue = await  ServiceWiseRevenue.findById(id);
        res.status(200).json( serviceWiseRevenue);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update serviceWise Revenue by id
app.put('/servicewiserevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   serviceWiseRevenue= await  ServiceWiseRevenue.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!serviceWiseRevenue){
            return res.status(404).json({message:`cannot find any  serviceWise Revenue with ${id}`})
        }
        const updatedServiceWiseRevenue = await  ServiceWiseRevenue.findById(id);
        res.status(200).json( updatedServiceWiseRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a serviceWise Revenue
app.delete('/servicewiserevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   serviceWiseRevenue = await  ServiceWiseRevenue.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!serviceWiseRevenue){
            return res.status(404).json({message:`cannot find any serviceWise Revenue with ${id}`})
        }
        
        res.status(200).json(serviceWiseRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//New Client Revenue

//to create a New Client Revenue
app.post('/newclientrevenue',async(req,res)=>{
    try{
     const newClientRevenue= await NewClientRevenue.create(req.body)
     res.status(200).json(newClientRevenue);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get new Client Revenue
 app.get('/newclientrevenue',async(req,res)=>{
    try{
        const  newClientRevenue= await  NewClientRevenue.find({});
        res.status(200).json(newClientRevenue);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get new Client Revenue by id
app.get('/newclientrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   newClientRevenue = await  NewClientRevenue.findById(id);
        res.status(200).json( newClientRevenue);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update new Client Revenue by id
app.put('/newclientrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   newClientRevenue= await  NewClientRevenue.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!newClientRevenue){
            return res.status(404).json({message:`cannot find any  new Client Revenue with ${id}`})
        }
        const updatedNewClientRevenue = await  NewClientRevenue.findById(id);
        res.status(200).json( updatedNewClientRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a new Client Revenue
app.delete('/newclientrevenue/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   newClientRevenue = await  NewClientRevenue.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!newClientRevenue){
            return res.status(404).json({message:`cannot find any New Client Revenue with ${id}`})
        }
        
        res.status(200).json(newClientRevenue);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Lead Report

//to create a lead Report
app.post('/leadreport',async(req,res)=>{
    try{
     const leadReport= await LeadReport.create(req.body)
     res.status(200).json(leadReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get lead Report
 app.get('/leadreport',async(req,res)=>{
    try{
        const  leadReport= await  LeadReport.find({});
        res.status(200).json(leadReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get lead Report by id
app.get('/leadreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leadReport = await  LeadReport.findById(id);
        res.status(200).json( leadReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update lead Report by id
app.put('/leadreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leadReport= await  LeadReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!leadReport){
            return res.status(404).json({message:`cannot find any  lead Report with ${id}`})
        }
        const updatedLeadReport = await  LeadReport.findById(id);
        res.status(200).json( updatedLeadReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a lead Report
app.delete('/leadreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leadReport = await  LeadReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!leadReport){
            return res.status(404).json({message:`cannot find any lead report with ${id}`})
        }
        
        res.status(200).json(leadReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Revenue Report

//to create a revenue Report
app.post('/revenuereport',async(req,res)=>{
    try{
     const revenueReport= await RevenueReport.create(req.body)
     res.status(200).json(revenueReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get revenue Report
 app.get('/revenuereport',async(req,res)=>{
    try{
        const  revenueReport= await  RevenueReport.find({});
        res.status(200).json(revenueReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get revenuereport by id
app.get('/revenuereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueReport = await  RevenueReport.findById(id);
        res.status(200).json( revenueReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update revenue Report by id
app.put('/revenuereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueReport= await  RevenueReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!revenueReport){
            return res.status(404).json({message:`cannot find any revenue Report with ${id}`})
        }
        const updatedRevenueReport = await  RevenueReport.findById(id);
        res.status(200).json( updatedRevenueReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a revenue Report
app.delete('/revenuereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   revenueReport = await  RevenueReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!revenueReport){
            return res.status(404).json({message:`cannot find any revenue report with ${id}`})
        }
        
        res.status(200).json(revenueReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//Collection Report

//total collection
//to create a total collection
app.post('/totalcollection',async(req,res)=>{
    try{
     const totalCollection= await TotalCollection.create(req.body)
     res.status(200).json(totalCollection);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get total Collection
 app.get('/totalcollection',async(req,res)=>{
    try{
        const  totalCollection= await  TotalCollection.find({});
        res.status(200).json(totalCollection);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get total Collection by id
app.get('/totalcollection/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalCollection = await  TotalCollection.findById(id);
        res.status(200).json( totalCollection);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update total Collection by id
app.put('/totalcollection/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalCollection= await  TotalCollection.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!totalCollection){
            return res.status(404).json({message:`cannot find any total Collection with ${id}`})
        }
        const updatedTotalCollection = await  TotalCollection.findById(id);
        res.status(200).json( updatedTotalCollection);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a total Collection
app.delete('/totalcollection/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   totalCollection = await  TotalCollection.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!totalCollection){
            return res.status(404).json({message:`cannot find any Total Collection with ${id}`})
        }
        
        res.status(200).json(totalCollection);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Payment Mode
//to create a payment  mode
app.post('/paymentmode',async(req,res)=>{
    try{
     const paymentmode= await PaymentMode.create(req.body)
     res.status(200).json(paymentmode);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get payment Mode
 app.get('/paymentmode',async(req,res)=>{
    try{
        const  paymentMode= await  PaymentMode.find({});
        res.status(200).json(paymentMode);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get payment Mode by id
app.get('/paymentmode/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paymentMode = await  PaymentMode.findById(id);
        res.status(200).json( paymentMode);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update payment Mode by id
app.put('/paymentmode/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paymentMode= await  PaymentMode.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!paymentMode){
            return res.status(404).json({message:`cannot find any payment Mode with ${id}`})
        }
        const updatedPaymentMode = await  PaymentMode.findById(id);
        res.status(200).json( updatedPaymentMode);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a payment Mode
app.delete('/paymentmode/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   paymentMode = await  PaymentMode.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!paymentMode){
            return res.status(404).json({message:`cannot find any Payment Mode with ${id}`})
        }
        
        res.status(200).json(paymentMode);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//Cash Report
//to create a cash report
app.post('/cashreport',async(req,res)=>{
    try{
     const cashReport= await CashReport.create(req.body)
     res.status(200).json(cashReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get cash Report
 app.get('/cashreport',async(req,res)=>{
    try{
        const  cashReport= await  CashReport.find({});
        res.status(200).json(cashReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get cash report by id
app.get('/cashreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cashReport = await  CashReport.findById(id);
        res.status(200).json( cashReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update cash Report by id
app.put('/cashreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cashReport= await  CashReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!cashReport){
            return res.status(404).json({message:`cannot find any cash report with ${id}`})
        }
        const updatedCashReport = await  CashReport.findById(id);
        res.status(200).json( updatedCashReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a cash report
app.delete('/cashreport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   cashReport = await  CashReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!cashReport){
            return res.status(404).json({message:`cannot find any cash Report with ${id}`})
        }
        
        res.status(200).json(cashReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//Cheque Report
//to create a cheque report
app.post('/chequereport',async(req,res)=>{
    try{
     const chequeReport= await ChequeReport.create(req.body)
     res.status(200).json(chequeReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get cheque Report
 app.get('/chequereport',async(req,res)=>{
    try{
        const  chequeReport= await  ChequeReport.find({});
        res.status(200).json(chequeReport);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get cheque report by id
app.get('/chequereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   chequeReport = await  ChequeReport.findById(id);
        res.status(200).json( chequeReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update cheque Report by id
app.put('/chequereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   chequeReport= await  ChequeReport.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!chequeReport){
            return res.status(404).json({message:`cannot find any cheque report with ${id}`})
        }
        const updatedChequeReport = await  ChequeReport.findById(id);
        res.status(200).json( updatedChequeReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a cheque Report
app.delete('/chequereport/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   chequeReport = await  ChequeReport.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!chequeReport){
            return res.status(404).json({message:`cannot find any Cheque Report with ${id}`})
        }
        
        res.status(200).json(chequeReport);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Expense

//Center Expense
//to create a center expense
app.post('/centerexpense',async(req,res)=>{
    try{
     const centerExpense= await CenterExpense.create(req.body)
     res.status(200).json(centerExpense);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get center Expense
 app.get('/centerexpense',async(req,res)=>{
    try{
        const  centerExpense= await  CenterExpense.find({});
        res.status(200).json(centerExpense);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get center Expense by id
app.get('/centerexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   centerExpense = await  CenterExpense.findById(id);
        res.status(200).json( centerExpense);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update center Expense by id
app.put('/centerexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   centerExpense= await  CenterExpense.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!centerExpense){
            return res.status(404).json({message:`cannot find any center Expense with ${id}`})
        }
        const updatedCenterExpense = await  CenterExpense.findById(id);
        res.status(200).json( updatedCenterExpense);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a center Expense
app.delete('/centerexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   centerExpense = await  CenterExpense.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!centerExpense){
            return res.status(404).json({message:`cannot find any Center Expense with ${id}`})
        }
        
        res.status(200).json(centerExpense);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Daily Expense
//to create a daily expense
app.post('/dailyexpense',async(req,res)=>{
    try{
     const dailyExpense= await DailyExpense.create(req.body)
     res.status(200).json(dailyExpense);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get daily Expense
 app.get('/dailyexpense',async(req,res)=>{
    try{
        const  dailyExpense= await  DailyExpense.find({});
        res.status(200).json(dailyExpense);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get daily Expense by id
app.get('/dailyexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyExpense = await  DailyExpense.findById(id);
        res.status(200).json( dailyExpense);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update daily Expense by id
app.put('/dailyexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyExpense= await  DailyExpense.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!dailyExpense){
            return res.status(404).json({message:`cannot find any Daily Expense with ${id}`})
        }
        const updatedDailyExpense = await  DailyExpense.findById(id);
        res.status(200).json( updatedDailyExpense);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a daily Expense
app.delete('/dailyexpense/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   dailyExpense = await  DailyExpense.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!dailyExpense){
            return res.status(404).json({message:`cannot find any Daily Expense with ${id}`})
        }
        
        res.status(200).json(dailyExpense);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Petty Cash
//to create a petty cash
app.post('/pettycash',async(req,res)=>{
    try{
     const pettyCash= await PettyCash.create(req.body)
     res.status(200).json(pettyCash);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get petty Cash
 app.get('/pettyCash',async(req,res)=>{
    try{
        const  pettyCash= await  PettyCash.find({});
        res.status(200).json(pettyCash);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get petty Cash by id
app.get('/pettycash/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   pettyCash = await  PettyCash.findById(id);
        res.status(200).json( pettyCash);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update petty Cash by id
app.put('/pettycash/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   pettyCash= await  PettyCash.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!pettyCash){
            return res.status(404).json({message:`cannot find any petty Cash with ${id}`})
        }
        const updatedPettyCash = await  PettyCash.findById(id);
        res.status(200).json( updatedPettyCash);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a petty cash
app.delete('/pettycash/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   pettyCash = await  PettyCash.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!pettyCash){
            return res.status(404).json({message:`cannot find any Petty Cash with ${id}`})
        }
        
        res.status(200).json(pettyCash);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//All Calls
//to create all calls
app.post('/allcalls',async(req,res)=>{
    try{
     const allCalls= await AllCalls.create(req.body)
     res.status(200).json(allCalls);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get all calls
 app.get('/allcalls',async(req,res)=>{
    try{
        const  allCalls= await  AllCalls.find({});
        res.status(200).json(allCalls);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get all calls by id
app.get('/allcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allCalls = await  AllCalls.findById(id);
        res.status(200).json( allCalls);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update all calls by id
app.put('/allcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allCalls= await  AllCalls.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!allCalls){
            return res.status(404).json({message:`cannot find any all Calls with ${id}`})
        }
        const updatedAllCalls= await  AllCalls.findById(id);
        res.status(200).json( updatedAllCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a all calls
app.delete('/allcalls/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   allCalls = await  AllCalls.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!allCalls){
            return res.status(404).json({message:`cannot find any all calls with ${id}`})
        }
        
        res.status(200).json(allCalls);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})












mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(port,()=>{
        console.log('Node api is running on port', port)
    })
}).catch((error) =>{
    console.log(error)
})
