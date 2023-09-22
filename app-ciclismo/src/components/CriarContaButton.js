import React from "react";
import '../pages-css/components/CriarContaButton.css';
import { Link } from 'react-router-dom';

const CriarContaButton = () => {
    return (
        <Link to='../cadastro' style={{textDecoration: 'none'}}>
            <button>CRIAR UMA CONTA</button>
        </Link>
    )
}
export default CriarContaButton;