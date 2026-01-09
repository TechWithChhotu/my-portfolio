import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// resend.emails.send({
//   from: "onboarding@resend.dev",
//   to: "chhotustudymca@gmail.com",
//   subject: "Hello World",
//   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });

export const sendMail = async (subjectOfmail, html) => {
  return await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.OWNER_EMAIL,
    subject: subjectOfmail,
    html: html,
  });
};
