import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import SMS from './pages/SMS';
import BikeView from './pages/BikeViewPage';
import BikeRegister from './pages/BikeCreatePage';
import Grupo from './pages/Grupo';
import ConvidarAmigos from './pages/ConvidarAmigos';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/sms" element={<SMS />}></Route>
        <Route path="/bike-view" element={<BikeView />}></Route>
        <Route path="/bike-register" element={<BikeRegister />}></Route>
        <Route path="/grupo" element={<Grupo />}></Route>
        <Route path="/convidaramigos" element={<ConvidarAmigos />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
