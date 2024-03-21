import {Routes, Route, Navigate} from 'react-router-dom'
import { PlanesPage } from './pages/PlanesPage';
import { PremiosPage } from './pages/PremiosPage';
import { SorteosPage } from './pages/SorteosPage';
import { ResultadosPage } from './pages/ResultadosPage';
import { ResultadoEnVivoPage } from './pages/ResultadoEnVivoPage';
import { FormularioResultadosPage } from './pages/FormularioResultadosPage';
import { AgregarResultadoForm } from './components/AgregarResultadoForm';
//import { AgregarSorteoForm } from './components/AgregarSorteoForm';
import { IngresarResultadoForm } from './components/IngresarResultadoForm';

export const AppRoutes = () => (
    <Routes>        
        <Route path="/" element={<Navigate to="/resultado-en-vivo" />} />
        <Route path="/resultado-en-vivo" element={<ResultadoEnVivoPage/>} />
        <Route path="/planes" element={<PlanesPage/>} />        
        <Route path="/sorteos" element={<SorteosPage/>} />
        <Route path="/premios" element={<PremiosPage/>} />
        <Route path="/resultados" element={<ResultadosPage/>} />
        <Route path="/ingresar-resultado" element={< IngresarResultadoForm/>} />
        <Route path="/agregar-sorteo" element={< AgregarSorteoForm/>} />
        {/* <Route path="agregar-resultado" element={< AgregarResultadoForm/>} /> */}
        <Route path="/resultados/:id" element={<FormularioResultadosPage/>} />
    </Routes>      

);