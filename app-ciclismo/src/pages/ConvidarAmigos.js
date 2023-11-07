import React from 'react';
import '../pages-css/ConvidarAmigos.css';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../components/BarraDePesquisa';


function ConvidarAmigos() {
  const convidar = "Convidar amigos";
  const nameUser = "Rodrigo";
  const login = "Admin";

  return (
    <div className="convidar-amigos">
      <BarraDePesquisa />

      <div className="user-info">
        <div className="info-container">
          <img className="direita" src={Estrela} alt="estrela_branca" />
          
          <div className="userImg-container">
          </div>
          
        
        </div>
      </div>

      <div className="msg-button">
        <div className="msg-button-container">
         
          <p>Grupo "placeholder" criado com sucesso.</p>
        </div>
        <button className="convidar btn-esquerda">Convidar amigos</button>
        <button className="voltar btn-direita">Voltar para o início</button>
      </div>
    </div>
  );
}

export default ConvidarAmigos;
