const mongoose = require("mongoose");
const weeklyScheduleSchema = new mongoose.Schema({
    dayOfWeek: String,
    times: [String],
    coursePlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'CoursePlan' },
});
const WeeklySchedule = mongoose.model("WeeklySchedule", weeklyScheduleSchema);
module.exports = WeeklySchedule;