import React from 'react';
import GroupFeed from '../GroupFeed/GroupFeed';
import '../GroupList/GroupList.css';
import imgGrupo from '../../assets/perfil_imgs/Rodrigo_perfil.jpg'
function GroupList() {
  return (
    <div className="group-list">
      {/* Lista de grupos */}
      <div className='coluna-esquerda-grupo'>
      <h1>Grupos</h1>
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
    </div>
    <div className='coluna-direita-grupo'>
        <GroupFeed
          imagemGrupo={imgGrupo}
          nomeGrupo="Meninas Super Poderosas"
          passeiosRecentes="2 passeios recentes"
          qtdParticipantes="3 participantes"
        />
        <GroupFeed
          imagemGrupo={imgGrupo}
          nomeGrupo="Roda presa"
          passeiosRecentes="5 passeios recentes"
          qtdParticipantes="2 participantes"
        />
        <GroupFeed
          imagemGrupo={imgGrupo}
          nomeGrupo="Adrenalina"
          passeiosRecentes="3 passeios recentes"
          qtdParticipantes="6 participantes"
        />
      </div>
    </div>
  );
}

export default GroupList;
