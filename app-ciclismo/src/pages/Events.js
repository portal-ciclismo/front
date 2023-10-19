import React, { useState, useEffect } from 'react';
import '../pages-css/Events.css';
import BarraDePesquisa from '../components/BarraDePesquisa';
import api from '../services/api';

function Events() {
  const [eventos, setEventos] = useState([]);


  const fetchEventos = async () => {
    try {
      const response = await api.get('/eventos');
      setEventos(response.data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };  

  useEffect(() => {
    fetchEventos();
  }, []);

  return (
    <div className="events">
      <BarraDePesquisa />
      <main className="main-content-events">
        <div className="Evento-titulo">
          <h1>Eventos Abertos</h1>
        </div>
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>
              <div className="evento-card">
                <h2>{evento.nome}</h2>
                <p>Data: {evento.data}</p>
                <p>Participantes: {evento.participantes}</p>
                <p>Local de Partida: {evento.localPartida}</p>
                <p>Local de Chegada: {evento.localChegada}</p>
                <p>Dificuldade: {evento.dificuldade}</p>
                <p>Descrição: {evento.descricao}</p>
              </div>
            </li>
          ))}
        </ul>

      </main>
    </div>
  );
}

export default Events;
