import React from 'react';
import './TopBar.css';
import logo from '../../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../../assets/Estrelas/Estrela_grande_branca.png';


function TopBar() {
  const usuario = "Rodrigo Rebouças (Professor)";
  const nivelAmador = "Nível 2";

  return (
    <div className="top-bar">
      <div className="menu-item-conteiner">
        <img src={logo} alt="Logo1" />
        <div className="search-container">
          <input type="text" placeholder="  O que está procurando hoje?" />
          <i className="search-icon"></i>
        </div>
        <button>Buscar</button>
      </div>

      <div className="user-info">
        <div className="info-container">
          <img src={Estrela} alt="estrela_branca" />
          <h2>{usuario}</h2>
          <p>Amador: {nivelAmador}</p>
  
        </div>
      </div>
    </div>
  );
}

export default TopBar;
