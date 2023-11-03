import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import "../pages-css/Login.css";

function Login() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginDenied, setLoginDenied] = useState(false);

  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleOnChangeLogin = (e, key) => {
    setLoginState({ ...loginState, [key]: e.target.value });
  };

  const sendLogin = (data) => {
    api
      .post("/usuarios", data)
      .then((response) => {
        const authToken = response.data.token;
        localStorage.setItem('token', authToken);
        setLoginStatus(true);
        navigate('/cadastroperfil');
      })
      .catch((error) => {
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

        {loginStatus && navigate('/cadatroperfil')}
        {loginDenied && (
          <p>Erro ao fazer login.</p>
        )}
      </form>
    </div>
  );
}

export default Login;
