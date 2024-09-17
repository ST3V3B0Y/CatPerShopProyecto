import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8087/producto/";

// Uso de HOOKS (Api's de node para gestionar )

const CompShowTable = () => {
  const [productos, setProducto] = useState();
  useEffect(() => {
    getAllProductos();
  }, []);
  const datos = productos || [];
  //Procedimiento para mostrar todos los blogs
  const getAllProductos = async () => {
    const res = await axios.get(URI);
    setProducto(res.data);
  };

  //Procedimiento para eliminar un blog
  const deleteProducto = async (producto_id) => {
    await axios.delete(`${URI}${producto_id}`);
    getAllProductos();
  };

  // Vista

  return (
    <div className="container">
      <h1 className="titulo-Inventario m-3">Inventario de productos</h1>
      <div className="row">
        <div className="col">
          <Link to="/nuevo-producto" className="btn btn-primary mt-2 mb-2">
            <i className="fa-solid fa-plus" />
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((producto) => (
                <tr key={producto.producto_id}>
                  <td> {producto.producto} </td>
                  <td> {producto.precio} </td>
                  <td> {producto.descripcion}</td>
                  <td>
                    <Link
                      to={`/editar-producto/${producto.producto_id}`}
                      className="btn btn-info"
                    >
                      <i className="fa-regular fa-pen-to-square" />
                    </Link>
                    <button
                      onClick={() => deleteProducto(producto.producto_id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowTable;
