import React from "react";
// import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="index-box">
      <div className="head-index">
        <h1 className="titulo-index">
          Bienvenido a <br /> <span className="span-index">CatPerShop</span>{" "}
        </h1>
        <h2 className="frase-index">Lo mejor para tu mascota</h2>
      </div>
      <div className="publicidad-index">
        <button className="boton-publicidad">
          <i class="flecha fa-solid fa-chevron-left"></i>
        </button>
        <div className="cuadro-publicitario">
          <h1>Publicidad</h1>
        </div>
        <button className="boton-publicidad">
          <i class="flecha fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="barra1" />
      <div className="barra2" />
      <div className="barra3" />

      <div className="menu-body-index">
        <div className="categoria-body-index">
          <img
            src="../perro.png"
            alt="Logo perro"
            className="icon-menu-index"
          />
          <a href="/">Accesorios para Perros</a>
        </div>
        <div className="categoria-body-index">
          <img src="../gato.png" alt="Logo gato" className="icon-menu-index" />
          <a href="/">Accesorios para Gatos</a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
