import React from 'react';
import '../pages-css/perfil.css'; 

import TopBar from '../components/TopBar/TopBar';
import GroupList from '../components/GroupList/GroupList';

function Perfil(props) {
  const { nomeCompleto, localizacao } = props;

  return (
    <div className="Perfil">
      <TopBar />
      
      <main className="main-content-perfil">
        <div className="profile-sidebar" nomeCompleto={nomeCompleto} localizacao={localizacao} />
        <GroupList />
      </main>
    </div>
  );
}

export default Perfil;
