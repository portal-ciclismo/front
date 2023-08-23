import '../pages-css/Cadastro.css';
import React, { useState } from 'react';

function Cadastro() {
    const [nome, setNome] = useState('');
    const[sobrenome, setSobrenome] = useState('');


    return (
        <div className='wrapper'>
            <h1 className="text-signup">Página de Cadastro</h1>
            <div className='signup-form-wrap'>
                <form className='form' method='POST' onSubmit={handleSubmit}>
                    <div className='nome'>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' onChange={(e) => setNome(e.target.value)} required ></input>
                    </div>
                    <div className='sobrenome'>
                        <label htmlFor='sobrenome'>Sobrenome</label>
                        <input type='text' id='Sobrenome' onChange={(e) => setSobrenome(e.target.value)} required ></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;