// Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

export default Appointment = mongoose.model("Appointment", appointmentSchema);
