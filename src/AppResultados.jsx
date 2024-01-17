import logo from './assets/moneda-dorado.png';
import letras from './assets/letras-dorado.png'
import './AppResultados.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { PlanesPage } from './pages/PlanesPage';
import { PremiosPage } from './pages/PremiosPage';
import { SorteosPage } from './pages/SorteosPage';
import { ResultadosPage } from './pages/ResultadosPage';
import { ResultadoPage } from './pages/ResultadoPage';
// import { ContadorPremios } from './components/ContadorPremios';
import { useState } from 'react';

import { FormularioResultadosPage } from './pages/FormularioResultadosPage';
import { AgregarResultado } from './components/AgregarResultado';
import { ListaPlanes } from './components/ListaPlanes';
import { ListaPremios } from './components/ListaPremios';
// import { ListaResultados } from './components/ListaResultados';
// import { Resultados } from './components/Resultados';
import { TarjetaPremio } from './components/TarjetaPremio';

export function AppResultados() {
  
  
  const [contador, setContador] = useState('');
  //const [resultados, setResultados] = useState([]);

  // const onAgregarResultado = (input) => {
  //   console.log(input)
  //   const resultado = {
  //     id: resultados.length,
  //     numeros: input,
  //     serie: '023'
  //   }
  //   setResultados([...resultados, resultado])
  // }

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
        <Route path="/resultado" element={<ResultadoPage/>} />
        <Route path="/ingresar-resultado" element={<FormularioResultadosPage/>} />
        <Route path="/agregar-resultado" element={<AgregarResultado/>} />
        <Route path="/resultados/:id" element={<FormularioResultadosPage/>} />
    </Routes>  
    
    </BrowserRouter> 

    <div>{premios.map(premio => (
        < TarjetaPremio key={premio.id} premio={ premio } />
    ))}</div>
    
    <ContadorPremios contador={contador} setContador={setContador} premios={premios} setPremios={setPremios}/> 
    {/* <h1>Resultados</h1>
    <AgregarResultado agregarResultado={onAgregarResultado}></AgregarResultado>
    <ol>
      {resultados.map(item => <li key = {item.id}>numeros={item.numeros} serie={item.serie}</li>  )}
    </ol> */}


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={letras} className="App-letras" alt="Lotería de Manizales" />
        
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
