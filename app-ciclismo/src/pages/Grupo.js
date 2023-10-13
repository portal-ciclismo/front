import React from 'react';
import '../pages-css/Grupo.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';


import userImg from '../assets/perfil_imgs/Rodrigo_perfil.jpg';


import imgGrupo from '../assets/perfil_imgs/Rodrigo_perfil.jpg'
import GroupFeed from '../components/GroupFeed/GroupFeed';




function Grupo() {
  const grupo = "Grupos de Passeio em João Pessoa";
  const usuario= "Rodrigo";


  return (
    <div className="grupo-menu">
      <div className="grupo-menu-container">
        <img src={logo} alt="Logo1" />
        <div className="search-container">
          <input type="text" placeholder="  O que está procurando hoje?" />
          <i className="search-icon"></i>
        </div>
        <button>Buscar</button>
      </div>


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




        <h1>
          Editar perfil
          <br />
          Grupos
          <br />
          <ul>
            <lo>Meus grupos</lo>
            <br/>
            <lo>Criar grupo</lo>
            <br/>
            <lo>Buscar grupo</lo>
          </ul>
          Conta
        </h1>


       
      </div>
     


    </div>
  );
}


export default Grupo;
