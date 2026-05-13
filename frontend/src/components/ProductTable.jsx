export default function ProductsTable() {
  return (
    <div className="container my-4">
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cemento</td>
              <td>$250</td>
              <td>
                <span className="badge bg-success">Stock</span>
              </td>
            </tr>
            <tr>
              <td>Mortero</td>
              <td>$210</td>
              <td>
                <span className="badge bg-success">Stock</span>
              </td>
            </tr>
            <tr>
              <td>Arena</td>
              <td>$1,800</td>
              <td>
                <span className="badge bg-success">Stock</span>
              </td>
            </tr>
            <tr>
              <td>Grava</td>
              <td>$2,000</td>
              <td>
                <span className="badge bg-success">Stock</span>
              </td>
            </tr>
            <tr>
              <td>Varilla (pz)</td>
              <td>$160</td>
              <td>
                <span className="badge bg-success">Stock</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}