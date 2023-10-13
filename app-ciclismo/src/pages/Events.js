import React from 'react';
import '../pages-css/Events.css';
import BarraDePesquisa from '../components/BarraDePesquisa';
import ufpb from '../assets/outras-imagens/ufpbRT.jpg'
import vila from '../assets/outras-imagens/vila.png'
import morro from '../assets/outras-imagens/morro-macaco.jpg'

const eventosDeExemplo = [
  {
    nome: 'Passeio de Ciclismo no Campus IV',
    data: '12/11/2023',
    participantes: 50,
    localPartida: 'Campus IV',
    localChegada: 'Campus IV',
    dificuldade: 'Fácil',
    descricao: 'Um passeio relaxante no campus IV para ciclistas de todos os níveis.',
    imagem : ufpb
  },
  {
    nome: 'Competição de Ciclismo na ladeira da Vila',
    data: '21/11/2023',
    participantes: 30,
    localPartida: 'Campus IV',
    localChegada: 'Vila Regina',
    dificuldade: 'Difícil',
    descricao: 'Pensa que é bom? Então tente subir a ladeira da vila no sol de meio dia.',
    imagem : vila
  },
  {
    nome: 'Corrida até o morro do macaco',
    data: '12/12/2023',
    participantes: 12,
    localPartida: 'Rio tinto',
    localChegada: 'Morro do macaco RJ',
    dificuldade: 'INSANO',
    descricao: 'Quer provar que é o mais insano? Então é só colar.',
    imagem : morro
  },
];

function Events() {
  return (
    <div className="events">
      <BarraDePesquisa />
      <main className="main-content-events">
      <div className="Evento-titulo">
          <h1>Eventos Abertos</h1>
        </div>
        <ul>
          {eventosDeExemplo.map((evento, index) => (
            <li key={index}>
              <h2>{evento.nome}</h2>
              <img src={evento.imagem} alt={evento.nome} className="event-image" />
              <p>Data: {evento.data}</p>
              <p>Participantes: {evento.participantes}</p>
              <p>Local de Partida: {evento.localPartida}</p>
              <p>Local de Chegada: {evento.localChegada}</p>
              <p>Dificuldade: {evento.dificuldade}</p>
              <p>Descrição: {evento.descricao}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Events;
