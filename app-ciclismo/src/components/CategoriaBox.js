import React from 'react';
import '../pages-css/components/CategoriaBox.css';

const CategoriaBox = ({ textoCategoria, imagemCategoria }) => {
    return (
        <div className="categoria-box">
                <img className="bannerCategoria" src={imagemCategoria} alt={textoCategoria}/>
                <span className='text-categoria-box'>{textoCategoria}</span>
        </div>
    );
};

export default CategoriaBox;