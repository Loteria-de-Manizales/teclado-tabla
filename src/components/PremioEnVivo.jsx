import { useState, useEffect } from "react"
import { getAllResultados } from "../api/axios/resultados.api"
import { getAllPremios } from "../api/axios/premios.api"
import './PremioEnVivo.css'

export const PremioEnVivo = ({ vivo, setVivo }) => {

  const [parciales, setParciales] = useState([]);
  const [premios, setPremios] = useState([]);
  const [totalPremios, setTotalPremios] = useState(0);
  const [contadorPremio, setContadorPremio] = useState(0)  

  useEffect(() => {
    CargarArrayPremios()
  }, []);


  async function CargarArrayPremios() {
    //setIsLoading(true);
    const response = await getAllPremios();
    console.log('Premios: ', response.data)
    setPremios(response.data);       
    setTotalPremios(response.data.length);
    //setIsLoading(false);   
  }

  const handleClickNext = () => {
    loadParciales();
    setContadorPremio(contadorPremio+1)    
  }

  useEffect(() => {
      setVivo(parciales[parciales.length - 1])      
  }, [handleClick])

  const loadParciales = async function () {
    const response = await getAllResultados();
      setParciales(response.data)
  }

 
    return (
      <>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2> {contadorPremio ? `PREMIO ${premios[contadorPremio-1].titulo} POR ${premios[contadorPremio-1].valor}` : "PREMIOS"} </h2>
              <h1> {vivo ? `NÚMERO: ${vivo.numero} SERIE: ${vivo.serie}` : "RESULTADOS"} </h1>              
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          <button onClick={handleClickNext} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    )
}
