import React from 'react';
import "./ProfileSideBar.css";
import profileImage from "../../assets/perfil_imgs/placeholderImage.png";

function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      <div className="profileImg">
        <img src={profileImage} alt="Foto de perfil" />
      </div>
      <h1>
        Grupos
        <br />
        Passeios
        <br />
        Contato
        <br />
        Reportar
      </h1>
    </div>
  );
}

export default ProfileSidebar;
