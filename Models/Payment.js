let mongoose = require('mongoose')

let payments = new mongoose.Schema({
    purchaseDate: Date,
    nameofUser: String,
    invoiceNumber: Number,
    amount: Number,
    taxamount: Number,
    netAmount: Number,
    paid: Number,
    pendingAmount: Number,
    mode: String,
    writeoff: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('payments', payments);
