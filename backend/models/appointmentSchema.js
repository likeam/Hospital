import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must contain atleat 3 Charcters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [3, "Last Name Must contain atleat 3 Charcters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Pleae Provide a valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [11, "Phone Number must conatin atleat 11 digits!"],
    maxLength: [11, "Phone Number must contain atmost 11 digits"],
  },
  nic: {
    type: String,
    required: [true, "NIC Is Required!"],
    minLength: [13, "NIC Number must conatin atleat 13 digits!"],
    maxLength: [13, "NIC Number must contain atmost 13 digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: String,
    required: [true, "Appointment Date is Required"],
  },

  department: {
    type: String,
    required: [true, "Department is Required"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor First Name is Required"],
    },
    lastName: {
      type: String,
      required: [true, "Doctor Last Name is Required"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Doctor Address is Required"],
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Doctor Last Name is Required"],
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Doctor Last Name is Required"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
