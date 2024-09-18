import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="head-index">
      <header className="head-index">
        <h1 className="titulo-index">Bienvenido a CatPerShop</h1>
        <h2 className="frase-index">Lo mejor para tu mascota</h2>
      </header>
      <body>
        <div className="rutas-index">
          <div>
            <button type="button" className="boton-rutas btn btn-primary">
              <Link to="/">Usuarios</Link>
            </button>
          </div>
          <div>
            <button type="button" className="boton-rutas btn btn-primary">
              <Link to="/inventario">Productos</Link>
            </button>
          </div>
          <div>
            <button type="button" className="boton-rutas btn btn-primary ">
              <Link to="/inventario">Ventas</Link>
            </button>
          </div>
          <div>
            <button type="button" className="boton-rutas btn btn-primary">
              <Link to="/inventario">Otros</Link>
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Inicio;
