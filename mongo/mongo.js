const mongoose = require('mongoose');
const mongoPath = 'mongodb://localhost:27017/mpesatransactions';

exports.mpesaTransactionDBConnector = async() => {
    await mongoose.connect(mongoPath);
    return mongoose;
}