import React, { useState, useEffect } from 'react';
import { getAllPremios } from '../api/axios/premios.api';

export function PremiosDropDown({premio, setPremio, indicePremio, setIndicePremio}) {
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

  const handleChange = (event) => {
    setPremio(event.target.value);
    setIndicePremio(event.target.index);
  }

  return (
    <>
      <select value={premio} onChange={handleChange}>
        {premios.map((premio, index) => (
          <option key={index} value={premio.titulo}>
            {premio.titulo}
          </option>          
        ))}
      </select>      
      <div>{indicePremio}</div>
    </>
  );
}

