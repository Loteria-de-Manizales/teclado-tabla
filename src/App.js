import logo from './assets/moneda-dorado.png';
import letras from './assets/letras-dorado.png'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { PlanesPage } from './pages/PlanesPage';
import { PremiosPage } from './pages/PremiosPage';
import { SorteosPage } from './pages/SorteosPage';
import { ResultadosPage } from './pages/ResultadosPage';
import { ContadorPremios } from './components/ContadorPremios';

import { FormularioResultadosPage } from './pages/FormularioResultadosPage';
// import { Resultados } from './components/Resultados';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        
        <Route path="/" element={<Navigate to="/premios" />} />
        <Route path="/planes" element={<PlanesPage/>} />
        <Route path="/premios" element={<PremiosPage/>} />
        <Route path="/sorteos" element={<SorteosPage/>} />
        <Route path="/resultados" element={<ResultadosPage/>} />
        <Route path="/ingresar-resultado" element={<FormularioResultadosPage/>} />
        <Route path="/resultados/:id" element={<FormularioResultadosPage/>} />
    </Routes>  
    
    </BrowserRouter> 
    <ContadorPremios value = {37} />
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={letras} className="App-letras" alt="Lotería de Manizales" />
        {/* <Resultados /> */}
        
        <p>
        Sistema desarrollado e implementado por: 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/luis-alfonso-gomez-trujillo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingeniero Luis Alfonso Gómez Trujillo
        </a>
      </header>
    </div>
    </>    
  );
}

export default App;
