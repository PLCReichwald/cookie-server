const mongoose = require('mongoose');
const orderTimesSchema = new mongoose.Schema({
    orderWorldId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderWorld' },
    begin: Date,
    end: Date,
    WeeklySchedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WeeklySchedule' }],
    flexTime: Boolean,
});
const OrderTimes = mongoose.model('OrderTimes', orderTimesSchema);
module.exports = OrderTimes;