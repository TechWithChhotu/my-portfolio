// utils/twilio.js
import twilio from "twilio";
import { config } from "dotenv";
config();
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (message) => {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER, // +1xxxx
    to: process.env.OWNER_PHONE, // +91xxxx
  });
};

//  🔥 Future WhatsApp (later enable)
export const sendWhatsApp = async (message) => {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_WHATSAPP_FROM,
    to: process.env.OWNER_WHATSAPP,
  });
};
