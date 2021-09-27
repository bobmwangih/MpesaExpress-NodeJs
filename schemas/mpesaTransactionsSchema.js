const mongoose = require('mongoose');

const mpesaTransactionsSchema = mongoose.Schema({
    payingPhoneNumber: String,
    transationDate: String,
    mpesaReceiptNumber: String,
    paidAmount: String,
    merchantRequestID: String,
    checkoutRequestID: String
});

module.exports = mongoose.model('mpesatransactions', mpesaTransactionsSchema);