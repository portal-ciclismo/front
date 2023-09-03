import React from 'react';
import '../pages-css/Home.css';
import RecomendacaoBox from '../components/RecomendacaoBox';

import Aspas from '../assets/Icons/aspas_icon.jpg';
import Perfil1 from '../assets/perfil_imgs/Rodrigo_perfil.jpg'
import Perfil2 from '../assets/perfil_imgs/Vinicius_perfil.jpg'
import Perfil3 from '../assets/perfil_imgs/Gabriel_perfil.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <section className="section1">
        {/* Conteúdo da primeira seção */}
      </section>
      <section className="section2">
        {/* Conteúdo da segunda seção */}
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
          texto="Tinha medo de pedalar sozinha. Agora saio em grupo com gente maravilhosa que me ajuda muito."
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
        {/* Conteúdo da sexta seção */}
        <footer>
          {/* Conteúdo do footer */}
        </footer>
      </section>
    </div>
  );
};

export default Home;
