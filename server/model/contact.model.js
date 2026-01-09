import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    ip: String,
    userAgent: String,
    status: {
      type: String,
      default: "new", // new | replied | closed
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("Contact", contactSchema);
export default ContactModel;
