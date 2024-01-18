import {Routes, Route, Navigate} from 'react-router-dom'
import { PlanesPage } from './pages/PlanesPage';
import { PremiosPage } from './pages/PremiosPage';
import { SorteosPage } from './pages/SorteosPage';
import { ResultadosPage } from './pages/ResultadosPage';
import { ResultadoPage } from './pages/ResultadoPage';
import { FormularioResultadosPage } from './pages/FormularioResultadosPage';
import { AgregarResultado } from './components/AgregarResultado';


export const AppRoutes = () => (
    <Routes>        
        <Route path="/" element={<Navigate to="/sorteos" />} />
        <Route path="/planes" element={<PlanesPage/>} />
        <Route path="/premios" element={<PremiosPage/>} />
        <Route path="/sorteos" element={<SorteosPage/>} />
        <Route path="/resultados" element={<ResultadosPage/>} />
        <Route path="/resultado" element={<ResultadoPage/>} />
        <Route path="/ingresar-resultado" element={<FormularioResultadosPage/>} />
        <Route path="/agregar-resultado" element={<AgregarResultado/>} />
        <Route path="/resultados/:id" element={<FormularioResultadosPage/>} />
    </Routes>      

);