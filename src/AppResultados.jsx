import logo from './assets/moneda-dorado.png';
import letras from './assets/letras-dorado.png'
import './AppResultados.css';

import { Navigation } from './components/Navigation'

import { ContadorPremios } from './components/ContadorPremios';
import { TarjetaPremio } from "./components/TarjetaPremio";


import { getAllPremios } from './api/axios/premios.api';
import { useState, useEffect } from 'react';
import { AppRoutes } from './routes';

export function AppResultados() {

  const [totalPremios, setTotalPremios]=useState(0);
  const [contador, setContador] = useState(totalPremios);
  const [premios, setPremios]=useState([]);
 // const [isLoading, setIsLoading]=useState(false);

  useEffect(() => {
    CargarListaPremios();
  }, []);
 
  async function CargarListaPremios() {
    //setIsLoading(true);
    const response = await getAllPremios();
    //console.log(response.data)
    setPremios(response.data);
    setTotalPremios(response.data.length);
    setContador(response.data.length)
    //setIsLoading(false);
    //console.log('Total Premios: ', response.data.length);
  }
  
  //const [contador, setContador] = useState('');
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
    
      <Navigation/>
      <AppRoutes />
    <ContadorPremios contador={contador} setContador={setContador} premios={premios}/>

    <div>
      <h1>TOTAL PREMIOS: {totalPremios}</h1>
    </div>

    <div>
      <h1>CONTADOR: {contador}</h1>
    </div>
    
    <div>{premios.map(premio => (
        < TarjetaPremio key={premio.id} premio={ premio } />
    ))}</div>

      


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
