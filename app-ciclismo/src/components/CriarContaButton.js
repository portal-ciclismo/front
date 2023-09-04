import React from "react";
import '../pages-css/components/CriarContaButton.css';
import { Link } from 'react-router-dom';

const CriarContaButton = () => {
    return (
    <button><Link to='../cadastro' style={{ textDecoration: 'none' }}>CRIAR UMA CONTA</Link></button>
    )
}
export default CriarContaButton;