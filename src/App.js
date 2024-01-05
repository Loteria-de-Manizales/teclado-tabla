import logo from './assets/moneda-dorado.png';
import letras from './assets/letras-dorado.png'
import './App.css';

function App() {
  return (
     
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
    
  );
}

export default App;
