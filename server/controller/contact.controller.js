import ContactModel from "../model/contact.model.js";
import { sendSMS, sendWhatsApp } from "../utils/sendSMS.utils.js";
import { sendMail } from "../utils/mail.utils.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 🔐 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Name, Email and Message are required",
      });
    }

    // 💾 Save to DB
    const contact = await ContactModel.create({
      name,
      email,
      phone,
      subject,
      message,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    // 📲 SMS Notification
    const smsText = `
📩 New Portfolio Contact

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message}
    `;
    const whatsappText = `
📩 *New Portfolio Contact*

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || "N/A"}
📝 Subject: ${subject || "N/A"}

💬 Message:
${message}
    `;
    const html = `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `;
    const subjectOfmail = subject || "New Portfolio Contact";
    try {
      const resSendSMS = await sendSMS(smsText);
      // console.log("resSendSMS: ", resSendSMS);

      const resSendWhatsApp = await sendWhatsApp(whatsappText);
      // console.log("resSendWhatsApp: ", resSendWhatsApp);

      const resSendMail = await sendMail(subjectOfmail, html);
      // console.log("resSendMail: ", resSendMail);
    } catch (smsError) {
      console.error("SMS failed:", smsError.message);
      // ❗ SMS fail hone par bhi contact save rahega
    }

    return res.status(201).json({
      success: true,
      msg: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

// controllers/contact.controller.js
// import Contact from "../models/contact.model.js";
// import { mailer } from "../utils/mailer.js";
// import { mailer } from "../utils/mailer.utils.js";

// export const createContactMail = async (req, res) => {
//   try {
//     const { name, email, phone, subject, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         msg: "Name, Email and Message are required",
//       });
//     }

//     // 💾 Save to DB
//     await ContactModel.create({
//       name,
//       email,
//       phone,
//       subject,
//       message,
//       ip: req.ip,
//       userAgent: req.headers["user-agent"],
//     });

//     // 📧 Send Email
//     await mailer.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.OWNER_EMAIL,
//       subject: subject || "New Portfolio Contact",
//       html: `
//         <h3>New Contact Message</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone || "N/A"}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       msg: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Contact error:", error);
//     res.status(500).json({
//       success: false,
//       msg: "Server error",
//     });
//   }
// };
