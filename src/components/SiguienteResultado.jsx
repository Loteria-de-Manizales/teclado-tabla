import { useState, useEffect } from "react"
import { getAllResultados } from "../api/axios/resultados.api"

export const SiguienteResultado = ({ siguienteResultado, setSiguienteResultado }) => {

    const [parciales, setParciales] = useState([]);
    
    const handleClick = () => {
        //setContador(contador - 1)
        
        loadParciales();
        
    }


    useEffect(() => {    
        setSiguienteResultado(parciales[parciales.length - 1])
    },[parciales, setSiguienteResultado])
    
    
    const loadParciales = async function () {
        const res = await getAllResultados();
        setParciales(res.data)        }
    
    return (
        <>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1>
                            {
                                siguienteResultado ? `NUMEROS: ${siguienteResultado.numero} SERIE: ${siguienteResultado.serie}` : "RESULTADOS"
                            }
                        </h1>

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={handleClick} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
