import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must contain atleat 3 Charcters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must contain atleat 3 Charcters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Pleae Provide a valid Email!"],
  },
  phone: {
    type: Number,
    required: true,
    minLength: [11, "Phone Number must conatin atleat 11 digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message  Must contain atleat 10 Charcters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);

export default Message;
