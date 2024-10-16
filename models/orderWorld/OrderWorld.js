const mongoose = require('mongoose');
const orderWorldSchema = new mongoose.Schema({
    title: String,
    gender: String,
    tags: [String],
    description: String,
    orderDetail: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails' },
    orderTimes: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderTimes' },
});
const OrderWorld = mongoose.model('OrderWorld', orderWorldSchema);
module.exports = OrderWorld;