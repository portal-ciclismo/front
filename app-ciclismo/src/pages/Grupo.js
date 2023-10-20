import React from 'react';
import '../pages-css/Grupo.css';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';
import userImg from '../assets/perfil_imgs/Rodrigo_perfil.jpg';
import imgGrupo from '../assets/perfil_imgs/Rodrigo_perfil.jpg'
import GroupFeed from '../components/GroupFeed/GroupFeed';
import BarraDePesquisa from '../components/BarraDePesquisa';

function Grupo() {
  const grupo = "Grupos de Passeio em João Pessoa";
  const usuario= "Rodrigo";

  fetch('/api/grupos') 
  .then(response => response.json())
  .then(data => {
    // Use os dados recebidos do servidor no seu componente
  })
  .catch(error => {
    // Trate erros, como exibir uma mensagem de erro para o usuário
  });

  return (
    <div className="grupo-menu">
      <BarraDePesquisa />

      <div className="grupo-container">
        
        <div className="grupo-info">
          <img src={Estrela} alt="estrela_branca" />
          <h2>{grupo}</h2>
 
        </div>
      </div>

      <div className="direita-grupo">
       
      <GroupFeed
        imagemGrupo={imgGrupo}
        nomeGrupo="Jambalaya"
        passeiosRecentes="3 passeios recentes"
        qtdParticipantes="6 participantes"
        />
        <GroupFeed
        imagemGrupo={imgGrupo}
        nomeGrupo="Unidos do pedal"
        passeiosRecentes="1 passeio recente"
        qtdParticipantes="3 participantes"
        />
        <GroupFeed
        imagemGrupo={imgGrupo}
        nomeGrupo="Mountain bikers"
        passeiosRecentes="7 passeios recentes"
        qtdParticipantes="4 participantes"
        />
        <GroupFeed
        imagemGrupo={imgGrupo}
        nomeGrupo="Garotas de bikers"
        passeiosRecentes="2 passeios recentes"
        qtdParticipantes="3 participantes"
        />

      </div>

      <div className="profile-container">
        <div className="profileImg">
          <img src={userImg} alt="Foto de perfil" />
          <h2>{usuario}</h2>
        </div>

        <h1>Editar perfil</h1>
        <h1>Grupo</h1>
        <ul>
          <li>
            <a href="/meusgrupos">Meus grupos</a>
          </li>
          <li>
            <a href="/criargrupo">Criar grupo</a>
          </li>
          <li>
            <a href="/convidaramigos">Convidar Amigos</a>
          </li>
        </ul>
        <h1>Conta</h1>
      </div>

    </div>
  );
}

export default Grupo;
