import React from 'react';
import '../pages-css/CriarGrupo.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';



function CriarGrupo() {
  const grupo = "Criar Grupo";


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
