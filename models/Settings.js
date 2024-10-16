const mongoose = require("mongoose");
const settingsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    gymName: String,
    street: String,
    streetNumber: String,
    zipCode: String,
    city: String,
    phone: String,
    instagram: String,
    facebook: String,
    youtube: String,
    website: String,
    contactFirstName: String,
    contactLastName: String,
    contactEmail: String,
    contactPhone: String,
    contactPhoneMobile: String,
    contactBirthday: Date,
    gender: String,
    bankOwner: String,
    iban: String,
    bic: String,
    vatNumber: String,
    bankName: String,
    logo: String,
    slogan: String,
    description: String,
    tags: [String],
});

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;