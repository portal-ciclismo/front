import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../pages-css/Cadastro.css';

import api from '../services/api';

function Cadastro() {
  const [passwordValidation, setPasswordValidation] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
      .required('A confirmação de senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        api.post('/auth/new-register', values)
          .then(() => {
            // redirecionar o usuário para a página inicial logada ou página de login
          })
          .catch((error) => {
            console.error('Erro ao cadastrar usuário:', error);
          });
      } else {
        setPasswordValidation(true);
      }
    },
  });

  return (
    <div className="container-cadastro">
      <form className='cadastro-form' onSubmit={formik.handleSubmit}>
        <h1>Fazer cadastro</h1>
        <div>
          <input
            type="email"
            placeholder='E-mail'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-box">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder='Senha'
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-box">{formik.errors.password}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder='Confirmar Senha'
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error-box">{formik.errors.confirmPassword}</div>
          )}
        </div>

        {passwordValidation && (
          <div className="error-box">As senhas não coincidem.</div>
        )}

        <button type="submit">Cadastrar</button>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Faça o login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
