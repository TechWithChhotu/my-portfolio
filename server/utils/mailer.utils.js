// // utils/mailer.js
import nodemailer from "nodemailer";

// export const mailer = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // your gmail
//     pass: process.env.EMAIL_PASS, // app password
//   },
// });
export const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // 🔥 VERY IMPORTANT
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// ✅ VERIFY SMTP CONNECTION (YAHI LAGANA HAI)
mailer.verify((err, success) => {
  if (err) {
    console.log("❌ MAIL VERIFY ERROR:", err);
  } else {
    console.log("✅ MAIL SERVER READY");
  }
});
