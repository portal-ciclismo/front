import React from 'react';
import './TopBar.css';
import logo from '../../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../../assets/Estrelas/Estrela_grande_branca.png';

function TopBar() {
  const usuario = "José Luiz Datena (Zé da Manga)";
  const nivelAmador = "Nível 2"; 

  return (
    <div className="top-bar">
      {/* Menu */}
      <nav>
        <ul>
          <li className="menu-item">
            <div className="search-bar-container">
              <img src={logo} alt="Logo1" />
              <input type="text" placeholder="O que está procurando hoje?" className="search-bar" />
              <button className="right-button">Buscar</button>
            </div>
          </li>
          <li className="menu-item"></li>
          {/* Adicione mais itens de menu, se necessário */}
        </ul>
      </nav>
      {/* Informações do perfil */}
      <div className="user-info">
        <div className="info-container">
          <img src={Estrela} alt="estrela_branca" />
          <h2>
            {usuario}
          </h2>
          <p>Amador: {nivelAmador}</p>
          {/* Outras informações do perfil */}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
