import { useState, useEffect } from "react";
import premios from "../data/PlanDePremios2025.json";
import SorteoInfo from "../components/SorteoInfo";
import "./PremiosSorteados.css";

function PremiosSorteados() {
  const [premiosSorteados, setPremiosSorteados] = useState({});

  useEffect(() => {
    // Añadir un event listener para actualizar la tabla cuando cambien los datos
    const handleStorageChange = () => {
      const storedData = JSON.parse(localStorage.getItem("premiosSorteados")) || {};
      setPremiosSorteados(storedData);
    };

    // Cargar datos iniciales
    handleStorageChange();

    // Escuchar cambios en localStorage
    window.addEventListener("storage", handleStorageChange);
    
    // Configurar un intervalo para verificar cambios periódicamente
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <SorteoInfo />
      
      <div className="premios-sorteados-container">
        <h1 className="premios-titulo">Premios Sorteados</h1>
        <div className="table-container">
          <table className="premios-table">
            <thead>
              <tr className="table-header">
                <th className="table-header-cell">PREMIO</th>
                <th className="table-header-cell">VALOR</th>
                <th className="table-header-cell">NÚMERO</th>
                <th className="table-header-cell">SERIE</th>
              </tr>
            </thead>
            <tbody>
              {premios.map((premio) => {
                const premioGuardado = premiosSorteados[premio.titulo] || {};

                return (
                  <tr key={premio.titulo}>
                    <td className="table-cell">{premio.titulo}</td>
                    <td className="table-cell value-cell">{premio.valor}</td>
                    <td className="table-cell">{premioGuardado.numero || "-"}</td>
                    <td className="table-cell">{premioGuardado.serie || "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PremiosSorteados;