import React from 'react';
import '../pages-css/perfil.css'; 

import TopBar from '../components/TopBar/TopBar';
import ProfileSidebar from '../components/ProfileSideBar/ProfileSideBar';
import GroupList from '../components/GroupList/GroupList';

function Perfil() {
  return (
    <div className="Perfil">
      <TopBar />
      
      <main className="main-content-perfil">
        <ProfileSidebar className="profile-sidebar" />
        <GroupList />
      </main>
    </div>
  );
}

export default Perfil;
