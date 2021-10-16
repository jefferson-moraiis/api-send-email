const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("../config/smtp");

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
  });

  const mailSend = await transporter.sendMail({
    from: data.from,
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  });
}

module.exports = {
  sendEmail,
};
