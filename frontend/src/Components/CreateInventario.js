import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8087/productos/";

const CompCreateTable = () => {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  // Procedimiento guardar

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      producto: producto,
      precio: precio,
      descripcion,
    });
    navigate("/");
  };

  // Vista

  return (
    <div>
      <h3 className="titulo-createUsuario m-3"> Ingresar nuevo producto </h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <textarea
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <Link to="/inventario" className="btn btn-secundary button-turnback">
          <i className="fa-solid fa-person-walking-arrow-loop-left icon"></i>
        </Link>
        <button type="submit" className="btn btn-success m-3">
          <i className="fa-solid fa-check mx-1 bg-cyan"></i>
        </button>
      </form>
    </div>
  );
};

export default CompCreateTable;
