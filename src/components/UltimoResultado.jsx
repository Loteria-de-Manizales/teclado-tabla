import { useEffect, useState } from "react"
import { getAllResultados } from "../api/axios/resultados.api"

export const UltimoResultado = ({ ultimoResultado, setUltimoResultado }) => {

    const [parciales, setParciales ] = useState([]);

    useEffect(() => {
        async function loadParciales(){
           const res = await getAllResultados();
           setParciales(res.data)
        }
        loadParciales();
    },[])


    const handleClick = () => {
        setUltimoResultado(parciales[0])       
     }

    //setUltimoResultado(parciales[0])

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1>
                            {
                                ultimoResultado ? `NUMEROS: ${ultimoResultado.numero} SERIE: ${ultimoResultado.serie}` : "RESULTADOS"
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
