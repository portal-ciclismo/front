// components/CategoriaBox.js
import React from 'react';
import '../pages-css/components/CategoriaBox.css';

const CategoriaBox = ({ textoCategoria, imagemCategoria }) => {
    return (
        <div className="categoria-box">
            <div className="categoria-box-content">
                <img className="bannerCategoria" src={imagemCategoria} alt={textoCategoria}/>
                <h5 className='text-categoria-box'>{textoCategoria}</h5>
            </div>
        </div>
    );
};

export default CategoriaBox;