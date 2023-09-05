import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../pages-css/Cadastro.css';

import api from '../services/api';


function Cadastro() {
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ passwordValidation, setPasswordValidation ] = useState(false);

  /*const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setMessageType(null); // Limpar o tipo de mensagem
  };*/

  /*const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log('Formulário enviado:', formData);
      setPasswordMatch(true);
      setCadastroSucesso(true);
      setMessageType('success'); // Definir o tipo de mensagem como sucesso
    } else {
      setPasswordMatch(false);
      setMessageType('error'); // Definir o tipo de mensagem como erro
    }
  };*/

  const addUser = data => {
    if (password == passwordConfirm){
      api.post('/auth/new-register', data);
      // redirecionar o usuário para a página inicial logada ou página de login
    } else {
      setPasswordValidation(true);
    }
  }

  return (
    <div className="container-cadastro">
      
      <form className='cadastro-form' onSubmit={addUser}>
      <h1>Fazer cadastro</h1>
        <div>
          <input
            type="email"
            placeholder='E-mail'
            name="email"
            //value={formData.email}
            //onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Senha'
            name="password"
            //value={formData.password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Confirmar Senha'
            name="confirmPassword"
            //value={formData.confirmPassword}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>

        {/*essageType === 'error' && (
        <div className="message-box error-box">
          <span className="message-center">As senhas não coincidem.</span>
        </div>
        )*/}

        {/*messageType === 'success' && (
          <div className="message-box success-box">
            <span className="message-center">Cadastro realizado com sucesso!!!</span>
          </div>
        )*/}

        {passwordValidation && <span className="message-box error-box">As senhas não coincidem.</span>}

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
