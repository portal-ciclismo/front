import React, { useState } from "react";
import '../pages-css/components/CriarContaButton.css';
import logo from '../assets/Logo_Horizontal/logo_horizontal_branco.png';
import '../pages-css/components/BarraDePesquisa.css';
import Sidebar from './Navbar/Navbar';


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
        
            <Sidebar />            
            <img src={logo} alt="Logo1" />
            <div className="search-container">
            <input type="text" placeholder="O que está procurando hoje?" className="white-text-input" />                <i className="search-icon"></i>
            </div>
            <button>Buscar</button>

        </div>
    );
}

export default BarraDePesquisa;
