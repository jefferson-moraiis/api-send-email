const joi = require("@hapi/joi");

const sendEmail = require("./send-email-controller");

const getData = async (req, res) => {
  const { subject, name, phone, email, message } = req.body;

  const bodyJsonSchema = joi.object({
    subject: joi.string().required(),
    name: joi.string().required(),
    phone: joi.number().min(11).required(),
    email: joi.string().email().required(),
    message: joi.string().required(),
  });

  try {
    const data = await bodyJsonSchema.validateAsync({
      subject,
      name,
      phone,
      email,
      message,
    });

    const sendData = {
      from: `"[${data.name}]" <${data.email}>`,
      to: data.email,
      subject: `"${data.subject}"`,
      text: data.message,
      html: `
    <b>Email:${data.name}<b>
    <b>Telefone:${data.phone}<b>
    <p>${data.message}</p>
    `,
    };

    await sendEmail.sendEmail(sendData);

    return res.status(200).json({
      message:
        "Email enviado com sucesso! verique sua caixa de span,iremos entrar em contato o mais rapido possivel",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getData,
};
