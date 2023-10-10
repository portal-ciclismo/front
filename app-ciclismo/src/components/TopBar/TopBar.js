import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      {/* Adicione a barra de pesquisa e o menu aqui */}
      <input type="text" placeholder="Pesquisar" />
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          {/* Adicione mais itens de menu, se necessário */}
        </ul>
      </nav>
      <div className="user-info">
        <h2>Nome do Usuário</h2>
        {/* Outras informações do perfil */}
      </div>
    </div>
  );
}

export default TopBar;
