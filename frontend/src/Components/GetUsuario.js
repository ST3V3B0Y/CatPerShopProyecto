import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8087/clientes/";

// Uso de HOOKS (Api's de node para gestionar )

const CompShowUsuarios = () => {
  const [cliente, setCliente] = useState();
  useEffect(() => {
    getAllClientes();
  }, []);
  const datos = cliente || [];
  //Procedimiento para mostrar todos los blogs
  const getAllClientes = async () => {
    const res = await axios.get(URI);
    setCliente(res.data);
  };

  // Vista

  return (
    <div className="container">
      <h1 className="titulo-Inventario m-3">Usuarios</h1>
      <div className="row">
        <div className="col">
          <Link to="/nuevo-producto" className="btn btn-primary mt-2 mb-2">
            <i className="fa-solid fa-plus" />
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>IdCliente</th>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Mascota</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((cliente) => (
                <tr key={cliente.cliente_id}>
                  <td> {cliente.IdCliente} </td>
                  <td> {cliente.Usuario} </td>
                  <td> {cliente.Correo}</td>
                  <td> {cliente.Mascota}</td>
                  <td> {cliente.Telefono}</td>
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
