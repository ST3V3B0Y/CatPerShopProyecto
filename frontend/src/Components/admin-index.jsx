import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="index-box">
      <header className="head-index">
        <h1 className="titulo-index">Cuenta de administrador</h1>
        <h2 className="frase-index">Bienvenido</h2>
      </header>
      <table className="tabla-index">
        <tbody className="rutas-index">
          <tr>
            <td className="boton-rutas">
              <Link to="/login" className="link-index ">
                Usuarios
              </Link>
            </td>
            <td className="boton-rutas">
              <Link to="/inventario" className="link-index">
                Productos
              </Link>
            </td>
          </tr>
          <tr>
            <td className="boton-rutas">
              <Link to="/inventario" className="link-index">
                Ventas
              </Link>
            </td>
            <td className="boton-rutas">
              <Link to="/inventario" className="link-index">
                Otros
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
