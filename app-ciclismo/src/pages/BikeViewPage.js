import React from 'react';

import TopBar from '../components/TopBar/TopBar';
import ProfileSidebar from '../components/ProfileSideBar/ProfileSideBar';

function BikeViewPage({ location }) {
  //const bikeData = location.state; 

  return (
    <div>
         <TopBar />
      <main className="main-content-perfil">
        <ProfileSidebar />
        <div className='container-bike-view'>
      <h1>Informações da Bicicleta</h1>
       <p>Marca do Quadro: {/*{bikeData.frameBrand}*/}</p> 
      <p>Tamanho da Roda: {/*{bikeData.wheelSize}*/}</p>
      <p>Material do Quadro: {/*{bikeData.frameMaterial}*/}</p>
      </div>
      </main>
    </div>
  );
}

export default BikeViewPage;
