import React, { useState } from 'react';
import '../pages/CadastroPerfil';
import BarraDePesquisa from '../components/BarraDePesquisa';

function CadastroPerfil() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    nickname: '',
    sexo: '',
    cyclingCategory: '',
    location: '',
  });

  const [usuario, setUsuario] = useState('');
  const [nivelAmador, setNivelAmador] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça o envio dos dados do perfil para o servidor aqui
  
    setUsuario(profileData.fullName);
    setNivelAmador(profileData.cyclingCategory);
  };

  return (
    <div className="cadastro-perfil"> 
    
    <BarraDePesquisa />

      <div className="form-container">
        
        <form onSubmit={handleSubmit}>
          <div className="form-cadastro-perfil">
            
            <label className="form-label" htmlFor="fullName">Nome Completo</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-cadastro-perfil">
            <label className="form-label" htmlFor="nickname">Apelido</label>
            <input
              type="text"
              name="nickname"
              value={profileData.nickname}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-cadastro-perfil">
            <label className="form-label" htmlFor="sexo">Sexo</label>
            <input
              type="text"
              name="sexo"
              value={profileData.sexo}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-cadastro-perfil">
            <label className="form-label" htmlFor="cyclingCategory">Categoria de Ciclismo</label>
            <select
              name="cyclingCategory"
              value={profileData.cyclingCategory}
              onChange={handleChange}
              className="form-input"
            >
              <option value="AMADOR">Amador</option>
              <option value="PROFISSIONAL">Profissional</option>
            </select>
          </div>
          <div className="form-cadastro-perfil">
            <label className="form-label" htmlFor="location">Localização</label>
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Salvar Perfil</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroPerfil;
