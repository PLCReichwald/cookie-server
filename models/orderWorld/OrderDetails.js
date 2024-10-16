const mongoose = require('mongoose');
const orderDetailsSchema = new mongoose.Schema({
    orderWorldId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderWorld' },
    location: String,
    employmentType: String,
    employment: String,
    coursesPerWeek: Number,
    hoursPerWeek: Number,
    description: String,
    courseRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseRoom' },
});
const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);
module.exports = OrderDetails;