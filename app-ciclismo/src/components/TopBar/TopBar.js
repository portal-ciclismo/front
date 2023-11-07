import React, { useEffect, useState } from 'react';
import './TopBar.css';
import Estrela from '../../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../BarraDePesquisa';
// import api from './api'; 


function TopBar() {
  const [nomeCompleto, setNomeCompleto] = useState('');

//  useEffect(() => {
//   api.get("/cadastroperfil")
//    .then(response => {
//     const userData = response.data;
//     setNomeCompleto(userData.nomeCompleto);
//    })
//    .catch(error => {
//       console.error("Erro ao buscar os dados do usuário: ", error);
//    });
//  },[]);

  return (
    <div className="top-bar">
      <BarraDePesquisa />

      <div className="info-usuario">
        <div className="info-usuario-container">
          <img src={Estrela} alt="estrela_branca" />
          <h2>{nomeCompleto}</h2>
  
        </div>
      </div>
    </div>
  );
}

export default TopBar;
