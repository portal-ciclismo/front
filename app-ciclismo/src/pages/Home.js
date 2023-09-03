import React from 'react';
import '../pages-css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="section1">
        {/* Conteúdo da primeira seção */}
      </section>


      <section className="section2">
       
        {/* Conteúdo da segunda seção */}
      
        <section className="titulo">
          <h1>Pedalar sozinho nunca mais.</h1>
        
          <p className="texto">
            <strong>Camelo</strong> é sua nova Plataforma de ciclismo.
            Aqui você encontra ciclistas entusiastas e profissionais
            em uma comunidade confiável e crescente.</p>
        
          <button className='botao'><strong>SAIBA MAIS</strong></button>
        </section>

      </section>


      <section className="section3">
        {/* Conteúdo da terceira seção */}
      </section>
      <section className="section4">
        {/* Conteúdo da quarta seção */}
      </section>
      <section className="section5">
        {/* Conteúdo da quinta seção */}
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

