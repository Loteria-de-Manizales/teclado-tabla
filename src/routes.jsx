import { Routes, Route, Navigate } from "react-router-dom";
import { PlanesPage } from "./pages/PlanesPage";
import { PremiosPage } from "./pages/PremiosPage";
import { SorteosPage } from "./pages/SorteosPage";
import { ResultadosPage } from "./pages/ResultadosPage";
import { ResultadoEnVivoPage } from "./pages/ResultadoEnVivoPage";
// import { FormularioResultadosPage } from "./pages/FormularioResultadosPage";
//import { AgregarResultadoForm } from "./components/AgregarResultadoForm";
//import { AgregarSorteoForm } from "./components/AgregarSorteoForm";
//import { ResultadosTecladoVivo } from "./components/ResultadosTecladoVivo";
//import { IngresarResultadoForm } from './components/IngresarResultadoForm';
import FormularioGPT from "./components/FormularioGPT";
//import ResultadosTecladoGPT from "./components/ResultadosTecladoGPT";
import ResultadosPremiosTeclado from "./components/ResultadosPremiosTeclado";
import FormularioTeclado from "./components/FormularioTeclado";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/formulario-teclado" />} />
    <Route path="/resultado-en-vivo" element={<ResultadoEnVivoPage />} />
    <Route path="/planes" element={<PlanesPage />} />
    <Route path="/sorteos" element={<SorteosPage />} />
    <Route path="/premios" element={<PremiosPage />} />
    <Route path="/resultados" element={<ResultadosPage />} />
    {/* <Route path="agregar-resultado" element={<AgregarResultadoForm />} /> */}
    {/* <Route path="formulario-teclado" element={<ResultadosTecladoVivo />} /> */}
    <Route path="formulario-gpt" element={<FormularioGPT />} />
    <Route path="formulario-teclado" element={<FormularioTeclado />} />
    <Route
      path="resultados-premios-teclado"
      element={<ResultadosPremiosTeclado />}
    />
    {/* <Route path="/agregar-sorteo" element={<AgregarSorteoForm />} />
    <Route path="agregar-resultado" element={<AgregarResultadoForm />} />
    <Route path="/resultados/:id" element={<FormularioResultadosPage />} />  */}
  </Routes>
);
