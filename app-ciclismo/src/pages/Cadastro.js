import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../pages-css/Cadastro.css';

import api from '../services/api';

function Cadastro() {
  const [passwordValidation, setPasswordValidation] = useState(false);

  const navigate = useNavigate();

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
            navigate('/home');
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
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder='E-mail'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-box">
              <span className="error-text">{formik.errors.email}</span>
              <span className="close-icon" onClick={() => formik.setFieldError('email', '')}>X</span>
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder='Senha'
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-box">
              <span className="error-text">{formik.errors.password}</span>
              <span className="close-icon" onClick={() => formik.setFieldError('password', '')}>X</span>
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder='Confirmar Senha'
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error-box">
              <span className="error-text">{formik.errors.confirmPassword}</span>
              <span className="close-icon" onClick={() => formik.setFieldError('confirmPassword', '')}>X</span>
            </div>
          )}
        </div>

        {passwordValidation && (
          <div className="error-box">
            <span className="error-text">As senhas não coincidem.</span>
            <span className="close-icon" onClick={() => setPasswordValidation(false)}>X</span>
          </div>
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