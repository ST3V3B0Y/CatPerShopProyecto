import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8087/productos/";

const CompEditTable = () => {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Procedimiento para actualizar

  const update = async (e) => {
    await e.preventDefault();
    axios.put(URI + id, {
      producto: producto,
      precio: precio,
      descripcion: descripcion,
    });
    navigate("/inventario");
  };

  useEffect(() => {
    const getProdId = async () => {
      const res = await axios.get(URI + id);
      setProducto(res.producto);
      setPrecio(res.precio);
      setDescripcion(res.descripcion);
    };
    getProdId();
  }, [id]);

  

  return (
    <div>
      <h3 className="titulo-editUsuario m-3">
        Editar Producto {id}
      </h3>
      <form onSubmit={update}>
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
          <input
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
        <Link to="/inventario" className="btn btn-primary button-turnback">
          <i className="fa-solid fa-person-walking-arrow-loop-left icon"></i>
        </Link>
        <button type="submit" className="btn btn-primary mx-3">
          <i className="fa-solid fa-check mx-1"></i>
        </button>
      </form>
    </div>
  );
};
export default CompEditTable;
