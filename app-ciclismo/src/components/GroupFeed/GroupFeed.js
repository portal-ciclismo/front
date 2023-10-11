import React from 'react';
import '../GroupFeed/GroupFeed.css';

const GroupFeed = ({ imagemGrupo, nomeGrupo, passeiosRecentes, qtdParticipantes }) => {
  return (

    <div className="grupo-feed">
      <img src={imagemGrupo} alt={`grupo ${nomeGrupo}`} />
      <div className='conteudo-grupo'>
        <span>{nomeGrupo}</span>
        <p>{passeiosRecentes}</p>
        <p>{qtdParticipantes}</p>
      </div>
    </div>
  );
};

export default GroupFeed;
