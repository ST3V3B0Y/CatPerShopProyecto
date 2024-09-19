import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="index-box">
      <header className="head-index">
        <h1 className="titulo-index">Bienvenido a CatPerShop</h1>
        <h2 className="frase-index">Lo mejor para tu mascota</h2>
      </header>
      <body>
        <div className="rutas-index">
          <div>
            <Link
              to="/login"
              className="link-index btn btn-primary boton-rutas"
            >
              Usuarios
            </Link>
          </div>
          <div>
            <Link
              to="/inventario"
              className="link-index btn btn-primary boton-rutas"
            >
              Productos
            </Link>
          </div>
          <div>
            <Link
              to="/inventario"
              className="link-index boton-rutas btn btn-primary"
            >
              Ventas
            </Link>
          </div>
          <div>
            <Link
              to="/inventario"
              className="link-index boton-rutas btn btn-primary"
            >
              Otros
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Inicio;
