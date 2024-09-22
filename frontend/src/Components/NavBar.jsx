import React, { useState } from "react";
import BurguerButton from "./BurgerButton";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2 className="titulo-navbar">
          <a href="/" className="logo-navbar">
            <img src="../logocps.jpg" alt="Logo" className="logo" />
          </a>
          CatPerShop
        </h2>
        <div className={`nav-menu ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="/login" className="a-menu">
            Favoritos
          </a>
          <a onClick={handleClick} href="/login" className="a-menu">
            Pedidos
          </a>
          <a onClick={handleClick} href="/login" className="a-menu">
            Contáctanos
          </a>
          <a onClick={handleClick} href="/login" className="a-menu">
            Acerca de
          </a>
          <button className="boton-iniciar-sesion">
            <a href="/login" className="a-menu iniciar-sesion">
              Iniciar sesión
            </a>
            <FaUser className="icon-login" />
          </button>
        </div>
        <div className="burguer-navbar">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`} />
      </NavContainer>
      <div className="sub-navbar">
        <button className="categoria-subnavbar">
          <p>Mascotas</p>
          <i className="icon-categoria fa-solid fa-chevron-down"></i>
        </button>
        <button className="categoria-subnavbar">
          <a href="/inventario" className="a-navbar">Productos</a>
          <i className="icon-categoria fa-solid fa-chevron-down"></i>
        </button>
        <button className="categoria-subnavbar">
          <p>Servicios</p>
          <i className="icon-categoria fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: #fb93d7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a-menu {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .nav-menu {
    position: absolute;
    top: -700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    .a-menu {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 900px) {
      position: initial;
      margin: 0;
      .a-menu {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .nav-menu .active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    .a-menu {
      font-size: 2rem;
      margin-top: 1rem;
      color: wheat;
    }
  }

  .burguer-navbar {
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: rgb(33, 31, 31);
  top: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-raidus: 0 0 80% 0;
    left: 0;
    top: 0;
  }
`;
