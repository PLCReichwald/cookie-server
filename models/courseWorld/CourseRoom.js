const mongoose = require('mongoose');
const courseRoomSchema = new mongoose.Schema({
    coursePlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'CoursePlan' },
    name: String,
    description: String,
    maxParticipants: Number,
    fixParticipants: Boolean,
    images: [String],
    tags: [String],
});
const CourseRoom = mongoose.model('CourseRoom', courseRoomSchema);
module.exports = CourseRoom;