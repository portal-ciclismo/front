import React from 'react';
import '../pages-css/CriarGrupo.css';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../components/BarraDePesquisa';




function CriarGrupo() {
  const criar = "Criar Grupo";


return (
  <div className="criar-grupo-menu">
    <BarraDePesquisa />

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