import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gerardo07927@gmail.com',
        pass: 'psek qrmr csva pnbu'
      }
    });

    await transporter.sendMail({
      from: '"Formulario_web" <gerardo07927@gmail.com>',
      to: 'gerardo07927@gmail.com',
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h3>Nuevo mensaje desde la web</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    });

    res.status(200).json({ message: 'Correo enviado' });

  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

app.listen(3001, () => {
  console.log('✅ Backend corriendo en http://localhost:3001');
});