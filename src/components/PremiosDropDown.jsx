import React, { useState, useEffect } from 'react';
import { getAllPremios } from '../api/axios/premios.api';

export function PremiosDropDown() {
  const [premios, setPremios] = useState([]);
  
  // Obtener datos de la API
  useEffect(() => {
    CargarListaPremios()
  }, []);

  async function CargarListaPremios() {
       //setIsLoading(true);
       const response = await getAllPremios();
       console.log('Premios: ', response.data)
       setPremios(response.data);       
      //setIsLoading(false);
      
     }

  return (
    <select>
      {premios.map((premio, index) => (
        <option key={index} value={premio.titulo}>
          {premio.titulo}
        </option>
      ))}
    </select>
  );
}

