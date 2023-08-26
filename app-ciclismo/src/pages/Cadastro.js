import '../pages-css/Cadastro.css';
import React, { useState } from 'react';

function Cadastro() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      // Senhas coincidem, você pode enviar os dados do formulário para o servidor aqui
      console.log('Formulário enviado:', formData);
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="container-cadastro">
      
      <form className='form' onSubmit={handleSubmit}>
      <h2>Cadastre-se</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        {!passwordMatch && <p>As senhas não coincidem.</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
