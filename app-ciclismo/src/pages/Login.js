import { useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";

import "../pages-css/Login.css";
import logo_branca from "../assets/Logo_Horizontal/logo_horizontal_branco.png";

function Login() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginDenied, setLoginDenied] = useState(false);

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleOnChangeLogin = (e, key) => {
    setLoginState({ ...loginState, [key]: e.target.value });
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(loginState);
  };

  const sendLogin = (data) => {
    api
      .post("/auth/login", data)
      .then(() => {
        setLoginStatus(true);
        // guardar o token em localStorage
      })
      .catch(() => {
        setLoginDenied(true);
      });
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={sendLogin}>
        <h1>Fazer Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          required
          value={loginState.email}
          onChange={(e) => handleOnChangeLogin(e, "email")}
        />

        <input
          type="password"
          placeholder="Senha"
          required
          value={loginState.password}
          onChange={(e) => handleOnChangeLogin(e, "password")}
        />
        <button type="submit">Login</button>

        <p>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        {
          //loginStatus && (redirecionar o usuário pra página inicial logada)
        }
        {
          //loginDenied && (mensagem do erro correspondente do login)
        }
      </form>
    </div>
  );
}

export default Login;
