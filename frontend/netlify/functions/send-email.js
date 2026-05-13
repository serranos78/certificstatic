const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    // Los datos llegan en el body del request
    const { nombre, email, mensaje } = JSON.parse(event.body);

    // Configura el transporte de correo
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // usa variables de entorno en Netlify
        pass: process.env.EMAIL_PASS    // nunca pongas la contraseña directa
      }
    });

    // Contenido del correo
    await transporter.sendMail({
      from: `"Formulario_web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h3>Nuevo mensaje desde la web estática</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al enviar el correo: ", detalle: error.message })
    };
  }
};
