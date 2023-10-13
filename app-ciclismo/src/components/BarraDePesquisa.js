import React from "react";
import '../pages-css/components/CriarContaButton.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import '../pages-css/components/BarraDePesquisa.css'

const BarraDePesquisa = () => {
    return (
        <div className="menu-item-conteiner">
        <img src={logo} alt="Logo1" />
        <div className="search-container">
          <input type="text" placeholder="  O que está procurando hoje?" />
          <i className="search-icon"></i>
        </div>
        <button>Buscar</button>
      </div>
    )
}
export default BarraDePesquisa;