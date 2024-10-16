const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  coursePlanId: String,
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: String,
  agb: Boolean,
  newsletter: Boolean,
  settings: { type: mongoose.Schema.Types.ObjectId, ref: 'Settings' },
  coursePlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CoursePlan' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderWorld' }],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
