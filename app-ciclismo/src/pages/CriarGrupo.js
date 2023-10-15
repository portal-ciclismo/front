import React from 'react';
import '../pages-css/CriarGrupo.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';



function CriarGrupo() {
  const criar = "Criar Grupo";


return (
  <div className="criar-grupo-menu">
    <div className="criar-grupo-menu-container">
      <img src={logo} alt="Logo1" />
      <div className="criar-search-container">
        <input type="text" placeholder="  O que está procurando hoje?" />
        <i className="criar-search-icon"></i>
      </div>
      <button>Buscar</button>
    </div>


    <div className="criar-grupo-container">
      <div className="criar-grupo-info">
        <img src={Estrela} alt="estrela_branca" />
        <h2>{criar}</h2>

      </div>
    </div >

    <form>
    <div className='form-div'>
        <label>Nome do grupo</label> 
        <input type="text" placeholder=" "  />
    </div>

   

    <div className='form-div'  >
        <label>Privacidade</label>
        <input type="text" placeholder="  " />
    </div>
   

    <div className='form-div'   >
        <label>Convidar amigos</label>
        <input type="text" placeholder=" " />
    </div>

    <div>
        <input type='submit' value='Salvar'/>
    </div>
    

    </form>
   
    

    


  </div>
);

}


export default CriarGrupo; 
