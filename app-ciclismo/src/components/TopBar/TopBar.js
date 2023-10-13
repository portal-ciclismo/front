import React from 'react';
import './TopBar.css';
import logo from '../../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../BarraDePesquisa';

function TopBar() {
  const usuario = "Rodrigo Rebouças (Professor)";
  const nivelAmador = "Nível 2";

  return (
    <div className="top-bar">
      <BarraDePesquisa />

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
