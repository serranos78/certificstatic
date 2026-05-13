import cemento from '../assets/img/cemento.jpg';
import grava from '../assets/img/grava.png';
import varilla from '../assets/img/varilla.jpg';

export default function Categorias() {
  return (
    <section id="categorias" className="container my-5">
      
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Categorías de productos</h2>
        </div>
      </div>

      <div className="row g-4">

        {/* Categoría 1 */}

        <div className="col-12 col-md-4">
          <div className="card h-100 text-center">
            <img
              src={grava}
              className="card-img-top"
              alt="Imagen de la grava"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#productos" className="text-decoration-none">
                  Materiales Pétreos
                </a>
              </h5>
            </div>
          </div>
        </div>


        {/* Categoría 2 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 text-center">
            <img
              src={cemento}
              className="card-img-top"
              alt="Imagen de bulto de cemento"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#productos" className="text-decoration-none">
                  Materiales Aglutinantes
                </a>
              </h5>
            </div>
          </div>
        </div>

        {/* Categoría 3 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 text-center">
            <img
              src={varilla}
              className="card-img-top"
              alt="Imagen de varillas"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#productos" className="text-decoration-none">
                  Materiales Metálicos
                </a>
              </h5>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

