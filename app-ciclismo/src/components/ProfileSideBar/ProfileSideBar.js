import React, { useState } from 'react';
import './ProfileSideBar.css';
import profileImage from '../../assets/perfil_imgs/placeholderImage.png';

function ProfileSidebar() {
  const [bikeSectionOpen, setBikeSectionOpen] = useState(false);

  const toggleBikeSection = () => {
    setBikeSectionOpen(!bikeSectionOpen);
  };

  return (
    <div className="profile-sidebar">
      <div className="profileImg">
        <img src={profileImage} alt="Foto de perfil" />
      </div>
      <ul>
        <li>
          <a href="http://localhost:4200/perfil">Perfil</a>
        </li>
        <li>
          <a href="http://localhost:4200/cadastroperfil">Cadastrar Perfil</a>
        </li>
        <li>
          <a href="http://localhost:4200/grupo">Grupos</a>
        </li>
        <li>
          <div className="bike-section-toggle" onClick={toggleBikeSection}>
            Social {bikeSectionOpen ? '-' : '+'}
          </div>
          {bikeSectionOpen && (
            <ul className="bike-section">
              <li>
                <a href="http://localhost:4200/criargrupo">Criar Grupo</a>
              </li>
              <li>
                <a href="http://localhost:4200/convidaramigos">Convidar Amigos</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">Passeios</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Reportar</a>
        </li>
        <li>
          <div className="bike-section-toggle" onClick={toggleBikeSection}>
            Bicicletas {bikeSectionOpen ? '-' : '+'}
          </div>
          {bikeSectionOpen && (
            <ul className="bike-section">
              <li>
                <a href="http://localhost:4200/bike-register">Cadastre Sua Bike</a>
              </li>
              <li>
                <a href="http://localhost:4200/bike-view">Visualize Sua Bike</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
