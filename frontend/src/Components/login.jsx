import React from "react";
import "../App.css";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <body className="body-login">
      <div className="login-box">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required />
            <FaUser className="icon-login" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <FaLock className="icon-login" />
          </div>
          <div className="recordar-usuario">
            <label>
              <input type="checkbox" />
              Recuerdame
            </label>
            <a href="/">Recuperar contraseña</a>
          </div>
          <button type="submit">Ingresar</button>
          <div className="register-link">
            <p>¿No tienes cuenta?</p> <a href="/">Registrate</a>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Login;
