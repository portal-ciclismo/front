import React from 'react';
import Axios from 'axios'; 
import BikeForm from '../components/BikeForm/BikeForm';

import '../pages-css/BikeCreatePage.css';
import TopBar from '../components/TopBar/TopBar';
import ProfileSidebar from '../components/ProfileSideBar/ProfileSideBar';

function BikeCreatePage() {
  //const history = useHistory();
  const handleBikeSubmit = (bikeData) => {
    Axios.post('http://localhost:8080', bikeData)
      .then((response) => {
        console.log('Dados da bicicleta cadastrados:', response.data);

        // Redirecione para a página de visualização com os dados da bicicleta
       // history.push('/bike-view', response.data);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar a bicicleta:', error);
      });
  };

  return (
    <div>
      <TopBar />
      <main className="main-content-perfil">
      <ProfileSidebar />
      <div className='container-bike-form'>
      <h1>Cadastro de Bicicleta</h1>
      <BikeForm onSubmit={handleBikeSubmit} />
      </div>
      </main>
    </div>
  );
}

export default BikeCreatePage;
