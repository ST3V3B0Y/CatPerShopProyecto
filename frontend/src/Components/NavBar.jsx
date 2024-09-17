import React from "react";
import BurguerButton from "./BurgerButton";
// import styled from "styled-components";

function Navbar() {
  return (
    <>
      <div className="NavContainer">
        <h2 className="titulo-navbar">
          <a href="/" className="logo-navbar">
            <img src="../logocps.jpg" alt="Logo" />
          </a>
          CatPerShop
        </h2>
        <div className="nav-menu active">
          <a href="/" className="a-menu">
            Shop
          </a>
          <a href="/" className="a-menu">
            About
          </a>
          <a href="/" className="a-menu">
            Contact
          </a>
          <a href="/" className="a-menu">
            Blog
          </a>
        </div>
        <div className="account">
          <div className="register">
            <label>
              <a href="/" className="cuenta-navbar">
                Registrarse
              </a>
            </label>
          </div>
          <div className="login">
            <label>
              <a href="/" className="cuenta-navbar">
                Iniciar Sesión
              </a>
            </label>
          </div>
        </div>
        <div className="burguer-navbar">
          <BurguerButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;

// const NavContainer = styled.nav`
//   padding: 2rem;
//   background-color: #ff88dd;
//   display: flex;
//   align-items: left;
//   justify-content: space-between;

//   .login {
//     background
//   }

//   .Titulo {
//     color: white;
//     font-weight: bold;
//     align-items: center;
//     text-shadow: -1px 2px 2px black;
//   }

//   a {
//     margin-right: 1rem;
//     color: white;
//     text-decoration: none;
//   }

//   img {
//     width: 80px;
//     margin-left: 100px;
//     padding: 0;
//     border-radius: 100%;
//     pointer-events: none;
//     animation: img infinite 10s linear;
//   }

//   .nav-menu {
//     margin: auto 0;
//     font-size: 18px;
//   }

//   @keyframes img {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
