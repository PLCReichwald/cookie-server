const mongoose = require("mongoose");
const coursePlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startOfTheSeries: Date,
    timePeriod: number,
    weeklySchedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WeeklySchedule' }],
    courseTrainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    courseWorld: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseWorld' },
    courseRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseRoom' },
});
const CoursePlan = mongoose.model("CoursePlan", coursePlanSchema);
module.exports = CoursePlan;
