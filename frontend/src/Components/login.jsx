import React, { useState } from "react";
import "../App.css";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router";

function Login({ setUser }) {
  const [body, setBody] = useState({ usuario: "", contraseña: "" });
  const { push } = useNavigate();
  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:8087/api/login", body)
      .then(({ data }) => {
        localStorage.setItem("auth", "yes");
        push("/admin-index");
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  return (
    <div className="body-login">
      <div className="login-box">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Usuario"
              value={body.usuario}
              onChange={inputChange}
              required
              name="usuario"
            />
            <FaUser className="icon-login" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={body.contraseña}
              onChange={inputChange}
              name="contraseña"
            />
            <FaLock className="icon-login" />
          </div>
          <div className="recordar-usuario">
            <label>
              <input type="checkbox" />
              Recuerdame
            </label>
            <a href="/login">Recuperar contraseña</a>
          </div>
          <button onClick={onSubmit}>Ingresar</button>
          <div className="register-link">
            <p>¿No tienes cuenta?</p> <a href="/login">Registrate</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
