
const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  dataExame: {
    type: String, 
    required: true,
  },
  horarioExame: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

