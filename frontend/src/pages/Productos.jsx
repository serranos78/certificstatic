import ProductsTable from '../components/ProductTable';

export default function Productos() {
  return (
    <section id="productos" className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Productos</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ProductsTable />
        </div>
      </div>
    </section>
  );
}