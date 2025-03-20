import { Routes, Route, Navigate } from "react-router-dom";


export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/" />} />    
  </Routes>
);
