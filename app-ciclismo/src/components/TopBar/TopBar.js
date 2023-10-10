import React from 'react';
import './TopBar.css';

function TopBar() {
  const usuario = "José Luiz Datena (Zé da Manga)";
  const nivelAmador = "Nível 2"; // Nível de amador do usuário

  return (
    <div className="top-bar">
      {/* Menu */}
      <nav>
        <ul>
          <li className="menu-item">
            <div className="search-bar-container">
              <input type="text" placeholder="Pesquisar" className="search-bar" style={{ marginRight: 'auto' }} />
            </div>
          </li>
          <li className="menu-item"></li>
          {/* Adicione mais itens de menu, se necessário */}
        </ul>
      </nav>

      {/* Informações do perfil */}
      <div className="user-info">
        <h2>{usuario}</h2>
        <p>Amador: {nivelAmador}</p>
        {/* Outras informações do perfil */}
      </div>
    </div>
  );
}

export default TopBar;
