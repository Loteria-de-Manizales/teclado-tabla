import { useEffect, useState } from "react";
import { createSorteo, deleteSorteo, updateSorteo, getSorteo } from "../api/axios/sorteos.api";
import { useNavigate, useParams } from "react-router-dom";

export function AgregarSorteoForm() {

   const [entrada, setEntrada] = useState('')
   const [titulo, setTitulo] = useState()
   const [fecha, setFecha] = useState('')
   const [tipo, setTipo] = useState('')

   useEffect(()=>{    
        setTitulo(entrada);          
    }, [entrada])
    
     const onEntradaChange = (event) => {
      setEntrada(event.target.value);     
     };

     const onFechaChange = (event) => {
       setFecha(event.target.value);     
     };

     const onTipoChange = (event) => {
      setTipo(event.target.value);     
    };

     const sorteo = {
       "titulo": titulo,
       "plan": 1,
       "fecha": fecha,
       "tipo": tipo,
       "autoridades" : ''
     } 

     const navigate = useNavigate();
     const params = useParams()
    
     const handleSubmit =  async (data) => {      
        if (params.id){
         updateSorteo(params.id, sorteo)
        }else{
         await createSorteo(sorteo)
        }
        navigate("/sorteos")

      };

     useEffect(() => {
        const loadSorteo = async() => {
          if (params.id) {
            const res = await getSorteo(params.id)
            setEntrada(res.data.titulo)
          }
        }
        loadSorteo()          
      }, [params])

   return (
     <>
       <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
         <input 
             type="text" 
             placeholder="NÚMERO DE SORTEO"
             value={entrada}
             onChange={onEntradaChange} 
         />
         <input 
             type="date" 
             placeholder="FECHA"
             value={fecha}
             onChange={onFechaChange} 
         />
         <input 
             type="text" 
             placeholder="TIPO"
             value={tipo}
             onChange={onTipoChange} 
         />
         

         <h1><span>TITULO : </span>{titulo}</h1>
         <h1><span>FECHA   : </span>{fecha}</h1>
         <h1><span>TIPO   : </span>{tipo}</h1>
           <button>ENVIAR</button>
       </form>

       {params.id && <button onClick={async () => {
         const accepted= window.confirm('Está seguro?')
         if (accepted){
           await deleteSorteo(params.id)
           navigate('/sorteos')
         }
       }}  > Eliminar </button> }
      
     </>
   )
 }
