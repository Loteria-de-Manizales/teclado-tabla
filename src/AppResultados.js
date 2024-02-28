//import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar'
import { AppRoutes } from './routes';

// import { ContadorPlanes } from './components/ContadorPlanes';
// import { ContadorSorteos } from './components/ContadorSorteos';
// import { ContadorPremios } from './components/ContadorPremios';
// import { ContadorResultados } from './components/ContadorResultados';
// import { SiguienteResultado } from './components/SiguienteResultado';

// import { getAllPlanes } from './api/axios/planes.api';
// import { getAllSorteos } from './api/axios/sorteos.api';
// import { getAllPremios } from './api/axios/premios.api';
// import { getAllResultados } from './api/axios/resultados.api';


import './AppResultados.css';

export function AppResultados() {

  // const [totalPlanes, setTotalPlanes] = useState(0);
  // const [contadorPlanes, setContadorPlanes] = useState(totalPlanes);
  // const [planes, setPlanes] = useState([]);

  // const [totalSorteos, setTotalSorteos] = useState(0);
  // const [contadorSorteos, setContadorSorteos] = useState(totalSorteos);
  // const [sorteos, setSorteos] = useState([]);

  // const [totalPremios, setTotalPremios] = useState(0);
  // const [contadorPremios, setContadorPremios] = useState(totalPremios);
  // const [premios, setPremios] = useState([]);

  // const [totalResultados, setTotalResultados] = useState(0);
  // const [contadorResultados, setContadorResultados] = useState(totalResultados);
  // const [resultados, setResultados] = useState([]);

  // const [siguienteResultado, setSiguineteResultado] = useState()
  // const [isLoading, setIsLoading]=useState(false);

  // useEffect(() => {
  //   CargarListaPlanes();
  //   CargarListaSorteos();
  //   CargarListaPremios();
  //   CargarListaResultados();
    
  // }, []);

  // async function CargarListaPlanes() {
  //   //   //setIsLoading(true);
  //   const response = await getAllPlanes();
  //   console.log('Planes: ', response.data)
  //   setPlanes(response.data);
  //   setTotalPlanes(response.data.length);
  //   setContadorPlanes(response.data.length)
  //   //   //setIsLoading(false);
  //   console.log('Total Planes: ', response.data.length);
  // }

  // async function CargarListaSorteos() {
  //   //   //setIsLoading(true);
  //   const response = await getAllSorteos();
  //   console.log('Sorteos: ', response.data)
  //   setSorteos(response.data);
  //   setTotalSorteos(response.data.length);
  //   setContadorSorteos(response.data.length)
  //   //   //setIsLoading(false);
  //   console.log('Total Sorteos: ', response.data.length);
  // }

  // async function CargarListaPremios() {
  //   //setIsLoading(true);
  //   const response = await getAllPremios();
  //   console.log('Premios: ', response.data)
  //   setPremios(response.data);
  //   setTotalPremios(response.data.length);
  //   setContadorPremios(response.data.length);
  //   //setIsLoading(false);
  //   console.log('Total Premios: ', response.data.length);
  // }

  //  async function CargarListaResultados() {
  //    //setIsLoading(true);
  //    const response = await getAllResultados();
  //    console.log('Resultados: ', response.data)
  //    setResultados(response.data);
  //    setTotalResultados(response.data.length);
  //    setContadorResultados(response.data.length);
  //    console.log('Total Resultados: ', response.data.length);    
  //  }

  return (
    <>
      <NavBar />
      <AppRoutes />

      {/* <ContadorPlanes contador={contadorPlanes} setContador={setContadorPlanes} planes={planes}/>
      <ContadorSorteos contador={contadorSorteos} setContador={setContadorSorteos} sorteos={sorteos}/>
      <ContadorPremios contador={contadorPremios} setContador={setContadorPremios} premios={premios}/>
      <ContadorResultados contador={contadorResultados} setContador={setContadorResultados} resultados={resultados}/>
      <SiguienteResultado siguienteResultado={siguienteResultado} setSiguienteResultado={setSiguineteResultado} />
      <div>
        <h1>TOTAL PLANES: {totalPlanes} - CONTADOR PLANES: {contadorPlanes}</h1>
        <h1>TOTAL SORTEOS: {totalSorteos} - CONTADOR SORTEOS: {contadorSorteos}</h1>
        <h1>TOTAL PREMIOS: {totalPremios} - CONTADOR PREMIOS: {contadorPremios}</h1>
        <h1>TOTAL RESULTADOS: {totalResultados} - CONTADOR RESULTADOS: {contadorResultados}</h1>
      </div> */}
      
      <div className="App">
        <header className="App-header">
          
        </header>

       

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
      </div>
    </>
  );
}
