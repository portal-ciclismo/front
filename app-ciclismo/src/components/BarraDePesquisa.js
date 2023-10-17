import React, { useState } from "react";
import '../pages-css/components/CriarContaButton.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import '../pages-css/components/BarraDePesquisa.css';

const BarraDePesquisa = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMenuIconClick = () => {
        toggleMenu();
    }

    return (
        <div className="menu-container">
            <img src={logo} alt="Logo1" />
            <div className="search-container">
            <input type="text" placeholder="O que está procurando hoje?" className="white-text-input" />                <i className="search-icon"></i>
            </div>
            <button>Buscar</button>

            <div className="menu-icon" onClick={handleMenuIconClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default BarraDePesquisa;
