import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import "../pages-css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [loginDenied, setLoginDenied] = useState(false); // Adicione esta linha

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const handleLogin = (values) => {
    api
      .get(`/usuarios/user/${values.email}`)
      .then((response) => {
        const user = response.data;
        if (user && user.password === values.password) {
          const authToken = response.data.token;
          localStorage.setItem("token", authToken);
          navigate("/cadastroperfil");
        } else {
          setLoginDenied(true); 
        }
      })
      .catch((error) => {
        setLoginDenied(true); 
      });
  };

  return (
    <div className="container-login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form className="login-form">
          <h1>Fazer Login</h1>
          <Field type="email" name="email" placeholder="E-mail" required />
          <ErrorMessage name="email" component="div" className="error" />
          <Field type="password" name="password" placeholder="Senha" required />
          <ErrorMessage name="password" component="div" className="error" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
      {loginDenied && <p>Erro ao fazer login.</p>}
    </div>
  );
}

export default Login;
