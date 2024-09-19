import React, { useState } from "react";
import BurguerButton from "./BurgerButton";
// import styled from "styled-components";

function Navbar() {

  const [clicked, setClicked] = useState(false)
  console.log(clicked)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className="NavContainer">
        <h2 className="titulo-navbar">
          <a href="/" className="logo-navbar">
            <img src="../logocps.jpg" alt="Logo" />
          </a>
          CatPerShop
        </h2>
        <div className={`nav-menu ${clicked ? 'active' : ''}`}>
          <a href="/login" className="a-menu">
            Shop
          </a>
          <a href="/login" className="a-menu">
            About
          </a>
          <a href="/login" className="a-menu">
            Contact
          </a>
          <a href="/login" className="a-menu">
            Blog
          </a>
        </div>
        <div className="account">
          <div className="login">
            <label>
              <a href="/login" className="cuenta-navbar">
                Iniciar Sesión
              </a>
            </label>
          </div>
        </div>
        <div className="burguer-navbar">
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <div className={`burguer-transition initial ${clicked ? 'active' : ''}`}></div>
      </div>
    </>
  );
}

export default Navbar;
