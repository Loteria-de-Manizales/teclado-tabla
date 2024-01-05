import logo from './assets/moneda-dorado.png';
import letras from './assets/letras-dorado.png'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navigation from './components/Navigation'
import PremiosPage from './pages/PremiosPage';
import FormularioResultadosPage from './pages/FormularioResultadosPage';

function App() {
  return (
    <>
    <BrowserRouter>

    <Navigation/>
    <Routes>
        <Route path="/" element={<Navigate to="/premios" />} />
        <Route path="/premios" element={<PremiosPage/>} />
        <Route path="/ingresar-resultado" element={<FormularioResultadosPage/>} />
        
    
    </Routes>  
    
    </BrowserRouter> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={letras} className="App-letras" alt="Lotería de Manizales" />
        <h1>RESULTADOS SORTEOS</h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/luis-alfonso-gomez-trujillo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Implementado por Ingeniero y Desarrollador de Software Luis Alfonso Gómez Trujillo
        </a>
      </header>
    </div>
    </>    
  );
}

export default App;
