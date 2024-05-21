const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    petName: String,
    ownerName: String,
    appointmentDate: Date
});

const AppointmentModel = mongoose.model("appointments", AppointmentSchema);
module.exports = AppointmentModel;
