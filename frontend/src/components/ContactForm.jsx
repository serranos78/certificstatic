import { useState } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    setData({
      nombre: '',
      email: '',
      mensaje: ''
    });

    alert('Mensaje enviado');
  };

  return (
    <section id="contacto" className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <h2 className="text-center mb-4">Contacto</h2>

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tu nombre"
                value={data.nombre}
                onChange={(e) =>
                  setData({ ...data, nombre: e.target.value })
                }
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="tucorreo@email.com"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
                required
              />
            </div>

            {/* Mensaje */}
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Escribe tu mensaje"
                value={data.mensaje}
                onChange={(e) =>
                  setData({ ...data, mensaje: e.target.value })
                }
                required
              ></textarea>
            </div>

            {/* Botón */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}