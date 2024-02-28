// import { useEffect, useState } from "react";
// import { createSorteo, deleteSorteo, updateSorteo, getSorteo } from "../api/axios/sorteos.api";
// import { useNavigate, useParams } from "react-router-dom";

// export function AgregarSorteoForm({plan}) {

//     const [entrada, setEntrada] = useState('')
//     const [titulo, setTitulo] = useState()
//     const [fecha, setFecha] = useState('')

//     useEffect(()=>{    
//           setSorteo(entrada);          
//         }, [entrada])
    
//     const onEntradaChange = (event) => {
//     setEntrada(event.target.value);     
//     };

//     const sorteo = {
//       "titulo": titulo,
//       "plan": plan,
//       "fecha": ,
//       "autoridades" : serie
//     } 

//     const navigate = useNavigate();
//     const params = useParams()
    
//     const handleSubmit =  async (data) => {      
//        if (params.id){
//         updateResultado(params.id, resultado)
//        }else{
//         await createResultado(resultado)
//        }
//        navigate("/resultados")

//      };

//     useEffect(() => {
//        const loadResultado = async() => {
//          if (params.id) {
//            const res = await getResultado(params.id)
//            setEntrada(res.data.numero+' '+res.data.serie)
//          }
//        }
//        loadResultado()          
//      }, [params])

//   return (
//     <>
//       <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
//         <input 
//             type="text" 
//             placeholder="entrada"
//             value={entrada}
//             onChange={onEntradaChange} 
//         />
        
//         <textarea 
//             className="numero" 
//             placeholder='numero'
//             name="resultado" value={numero}
//             onChange={onEntradaChange}
//         />

//         <textarea 
//             className="serie" 
//             placeholder='serie'
//             name="serie" value={serie}
//             onChange={onEntradaChange}
//         />

//         <h1><span>NÚMEROS : </span>{numero}</h1>
//         <h1><span>SERIE   : </span>{serie}</h1>

//           <button>Siguiente</button>
//       </form>

//       {params.id && <button onClick={async () => {
//         const accepted= window.confirm('Está seguro?')
//         if (accepted){
//           await deleteResultado(params.id)
//           navigate('/resultados')
//         }
//       }}  > Eliminar </button> }
      
//     </>
//   )
// }
