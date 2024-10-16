const mongoose = require('mongoose');
const courseWorldSchema = new mongoose.Schema({
    coursePlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'CoursePlan' },
    name: String,
    description: String,
    numberOfParticipants: Number,
    waitingList: Number,
    tags: [String],
});
const CourseWorld = mongoose.model('CourseWorld', courseWorldSchema);
module.exports = CourseWorld;