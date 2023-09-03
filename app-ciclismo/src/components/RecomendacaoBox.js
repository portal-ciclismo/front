// components/RecomendacaoBox.js
import React from 'react';
import '../pages-css/components/RecomendacaoBox.css';

const RecomendacaoBox = ({ aspas, texto, imagemPerfil, nome}) => {
  return (
    <div className="caixa">
      <div className='aspas'>
      <img src={aspas} alt="Ícone de Aspas" />
      </div>
      <p>{texto}</p>
      <div className="perfil">
        <img src={imagemPerfil} alt={`Perfil de ${nome}`} />
        <span>{nome}</span>
      </div>
    </div>
  );
};

export default RecomendacaoBox;
