import { useEffect, useState } from "react";
import { createResultado, deleteResultado, updateResultado, getResultado } from "../api/axios/resultados.api";
import { useNavigate, useParams } from "react-router-dom";

export function IngresarResultadoForm({ sorteo, premio }) {

  const [entrada, setEntrada] = useState('')
  const [numero, setNumero] = useState()
  const [serie, setSerie] = useState()

  useEffect(() => {
    setNumero(entrada.substring(0, 4));
    setSerie(entrada.substring(5, 8));
  }, [entrada])

  const onEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const resultado = {
    "sorteo": sorteo,
    "premio": premio,
    "numeros": numero,
    "serie": serie
  }

  const navigate = useNavigate();
  const params = useParams()

  const handleSubmit = async (data) => {
    if (params.id) {
      updateResultado(params.id, resultado)
    } else {
      await createResultado(resultado)
    }
    navigate("/resultados")

  };

  useEffect(() => {
    const loadResultado = async () => {
      if (params.id) {
        const res = await getResultado(params.id)
        setEntrada(res.data.numeros + ' ' + res.data.serie)
      }
    }
    loadResultado()
  }, [params])

  return (
    <>
      <form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
            <div class="col"><button type="button" class="btn btn-primary">0</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
            <div class="col"><button type="button" class="btn btn-primary">1</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
            <div class="col"><button type="button" class="btn btn-primary">2</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
            <div class="col"><button type="button" class="btn btn-primary">3</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
            <div class="col"><button type="button" class="btn btn-primary">4</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
            <div class="col"><button type="button" class="btn btn-primary">5</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
            <div class="col"><button type="button" class="btn btn-primary">6</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
            <div class="col"><button type="button" class="btn btn-primary">7</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
            <div class="col"><button type="button" class="btn btn-primary">8</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
            <div class="col"><button type="button" class="btn btn-primary">9</button></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">10</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">11</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">12</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">13</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">14</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">15</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">16</button></div>
            <div class="col"></div>
          </div>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">17</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">18</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">19</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">20</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">21</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">22</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">23</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">24</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">25</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">26</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">27</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">28</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">29</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">30</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">31</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">32</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">33</button></div>
            <div class="col"></div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-primary">34</button></div>
            <div class="col"></div>
          </div>

        </div>
        <textarea
          className="numero"
          placeholder='numero'
          name="resultado" value={numero}
          onChange={onEntradaChange}
        />

        <textarea
          className="serie"
          placeholder='serie'
          name="serie" value={serie}
          onChange={onEntradaChange}
        />


        <h1><span>NÚMEROS : </span>{numero}</h1>
        <h1><span>SERIE   : </span>{serie}</h1>

        <button>Siguiente</button>
      </form>

      {params.id && <button onClick={async () => {
        const accepted = window.confirm('Está seguro?')
        if (accepted) {
          await deleteResultado(params.id)
          navigate('/resultados')
        }
      }}  > Eliminar </button>}

    </>
  )
}
