import {Routes, Route, Navigate} from 'react-router-dom'
import { PlanesPage } from './pages/PlanesPage';
import { PremiosPage } from './pages/PremiosPage';
import { SorteosPage } from './pages/SorteosPage';
import { ResultadosPage } from './pages/ResultadosPage';
import { FormularioResultadosPage } from './pages/FormularioResultadosPage';
//import { AgregarResultado } from './components/AgregarResultado';
import { IngresarResultadoForm } from './components/IngresarResultadoForm';

export const AppRoutes = () => (
    <Routes>        
        <Route path="/" element={<Navigate to="/resultados" />} />
        <Route path="/planes" element={<PlanesPage/>} />        
        <Route path="/sorteos" element={<SorteosPage/>} />
        <Route path="/premios" element={<PremiosPage/>} />
        <Route path="/resultados" element={<ResultadosPage/>} />
        <Route path="/ingresar-resultado" element={<FormularioResultadosPage/>} />
        <Route path="/agregar-resultado" element={<IngresarResultadoForm/>} />
        <Route path="/resultados/:id" element={<FormularioResultadosPage/>} />
    </Routes>      

);