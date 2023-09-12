import React from 'react';
import '../pages-css/Home.css';
import RecomendacaoBox from '../components/RecomendacaoBox';
import CriarContaButton from '../components/CriarContaButton';

import Aspas from '../assets/Icons/aspas_icon.jpg';
import Perfil1 from '../assets/perfil_imgs/Rodrigo_perfil.jpg'
import Perfil2 from '../assets/perfil_imgs/Vinicius_perfil.jpg'
import Perfil3 from '../assets/perfil_imgs/Gabriel_perfil.jpg'
import Logo from '../assets/Logo_Horizontal/logo_horizontal_fullcolor.svg'
import EstrelaColor from '../assets/Estrelas/Estrela_grande_fullcolor.png';
import LogoCamelo from '../assets/Camelo/camelo_branco.png'
import CoupleBike from '../assets/background-imgs/happy-young-couple-bike-ride-countryside.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <section className="section1">
        {/* Conteúdo da primeira seção */}
      </section>
      
      <section className="section2">
        <div className='section2-img'><img src={EstrelaColor}/></div>

        <div className='section2-container'>

          <div className='section2-text'>
            <span>Pedalar sozinho nunca mais.</span>
            <p><strong>Camelo</strong> é sua nova plataforma de ciclismo.
              Aqui você encontra ciclistas entusiastas e
              profissionais em uma comunidade confiável e
              crescente.</p>
          </div>

          <button>SAIBA MAIS.</button>
        </div>
      </section>
      <section className="section3">
        {/* Conteúdo da terceira seção */}
      </section>
      <section className="section4">
        {/* Conteúdo da quarta seção */}
      </section>
      <section className="section5">
        {/* Conteúdo da quinta seção */}
        <span className="title-section5">O que os camelers estão dizendo</span>
        <div className="container-recomendacao">
        <RecomendacaoBox
          aspas={Aspas}
          texto="Adorei! Depois que me mudei para a capital, era difícil andar de bicicleta. Agora pedalo toda semana!"
          imagemPerfil={Perfil1}
          nome="Rodrigo, (professor)"
        />
        <RecomendacaoBox
          aspas={Aspas}
          texto="Tinha medo de pedalar sozinhao Agora saio em grupo com gente maravilhoso que me ajuda muito."
          imagemPerfil={Perfil2}
          nome="Vinicius, (FilhoDeRodrigo)"
        />
        <RecomendacaoBox
          aspas={Aspas}
          texto="Este Sensacional! Fiz um network que me ajuda a achar peças e serviços para minha bike de competição. Recomendo! um exemplo de recomendação."
          imagemPerfil={Perfil3}
          nome="Gabriel, (Escrivão)"
        />
        </div>
      
      </section>
      <section className="section6">
        <div className='section6-text1'>
          <h1>Comunidade,<br/>Esporte,<br/> Lazer.</h1>
        </div>
        <div className='section6-text2'>
          <h2>Tudo isso<br/>e muito mais.</h2>
        </div>
        <div className='section6-button'>
          <CriarContaButton/>
        </div>
        <footer>
            <img src={Logo} alt='Logo camelo' className='footer-img'/>
          <div className='footer-text1'>
            <h1>FALE CONOSCO</h1>
          </div>
          <div className='footer-text2'>
            <h1>Instagram<br/>Twitter<br/>Facebook<br/>LinkedIn</h1>
          </div>
          <div className='footer-text3'>
            <h1>contato@camelo.com</h1>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
