import React, { useState, useEffect } from 'react';
import { getAllSorteos } from '../api/axios/sorteos.api';

export function SorteosDropDown() {
  const [sorteos, setSorteos] = useState([]);
  
  // Obtener datos de la API
  useEffect(() => {
    CargarListaSorteos()
  }, []);

  async function CargarListaSorteos() {
       //setIsLoading(true);
       const response = await getAllSorteos();
       console.log('Sorteos: ', response.data)
       setSorteos(response.data);       
      //setIsLoading(false);
      
     }

  return (
    <select>
      {sorteos.map((sorteo, index) => (
        <option key={index} value={sorteo.titulo}>
          {sorteo.titulo}
        </option>
      ))}
    </select>
  );
}

