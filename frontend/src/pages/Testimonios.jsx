import T1 from '../assets/img/T1image.jpg';
import T2 from '../assets/img/T2image.jpg';
import T3 from '../assets/img/T3image.jpg';
import T4 from '../assets/img/T4image.jpg';

export default function Testimonios() {
  return (
    <section id="testimonios" className="container my-5">

      {/* Título */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Testimonios</h2>
          <p className="text-muted">
            La opinión de quienes confían en nuestros materiales y servicio
          </p>
        </div>
      </div>

      {/* Testimonios */}
      <div className="row g-4">

        {/* Testimonio 1 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <img
                src={T2}
                alt="Cliente satisfecho"
                className="rounded-circle mb-3"
                width="80"
                height="80"
              />
              <p className="card-text">
                “Excelente calidad en los materiales. Siempre encuentro lo que
                necesito y el personal me asesora muy bien para mis proyectos.”
              </p>
              <h6 className="fw-bold mb-0">Cliente particular</h6>
              <small className="text-muted">Remodelaciones</small>
            </div>
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <img
                src={T1}
                alt="Cliente satisfecho"
                className="rounded-circle mb-3"
                width="80"
                height="80"
              />
              <p className="card-text">
                “Los precios son justos y la entrega siempre es puntual. Trabajo
                con ellos desde hace años y nunca me han fallado.”
              </p>
              <h6 className="fw-bold mb-0">Maestro de obra</h6>
              <small className="text-muted">Construcción residencial</small>
            </div>
          </div>
        </div>

        {/* Testimonio 3 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <img
                src={T3}
                alt="Cliente satisfecho"
                className="rounded-circle mb-3"
                width="80"
                height="80"
              />
              <p className="card-text">
                “El cemento y los materiales pétreos son de gran calidad.
                Recomiendo ampliamente esta tienda para cualquier obra.”
              </p>
              <h6 className="fw-bold mb-0">Contratista</h6>
              <small className="text-muted">Obra civil</small>
            </div>
          </div>
        </div>

        {/* Testimonio 4 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <img
                src={T4}
                alt="Cliente satisfecho"
                className="rounded-circle mb-3"
                width="80"
                height="80"
              />
              <p className="card-text">
                “Muy buen servicio al cliente. Me explicaron todo y me ayudaron
                a elegir el material adecuado para mi construcción.”
              </p>
              <h6 className="fw-bold mb-0">Cliente comercial</h6>
              <small className="text-muted">Compra frecuente</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
