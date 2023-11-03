import React from 'react';
import './TopBar.css';
import logo from '../../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../BarraDePesquisa';

function TopBar({ nomeCompleto, nivelAmador }) {
  return (
    <div className="top-bar">
      <BarraDePesquisa />

      <div className="info-usuario">
        <div className="info-usuario-container">
          <img src={Estrela} alt="estrela_branca" />
          <h2>{usuario}</h2>
          <p>Amador: {nivelAmador}</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
