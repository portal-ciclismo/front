import React from 'react';
import '../GroupFeed/GroupFeed.css';

const GroupFeed = ({ imagemGrupo, nomeGrupo, passeiosRecentes, qtdParticipantes}) => {
  return (
    
      <div className="grupo-feed">
        <img src={imagemGrupo} alt={`grupo ${nomeGrupo}`} />
        <span>{nomeGrupo}</span>
        <p>{passeiosRecentes}</p>
        <p>{qtdParticipantes}</p>
      </div>
  );
};

export default GroupFeed;
