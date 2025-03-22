import { Routes, Route, Navigate } from "react-router-dom";
import AtajosTeclado from "./pages/AtajosTeclado";
import PremioTeclado from "./pages/PremioTeclado";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/premio-teclado" />} />   
    <Route path="/atajos-teclado" element={<AtajosTeclado />} />
    <Route path="/premio-teclado" element={<PremioTeclado />} />
  </Routes>
);
