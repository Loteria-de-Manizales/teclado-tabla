
import { useState } from "react"

export const Contador = ({ value }) => {   
    
    const [contador, setContador] = useState(value)
    
    const handleClick = () => {
       setContador(contador - 1)
       
    }
    return (
    <>
        
        <button onClick={handleClick}>
            { contador }
        </button>
    </>    
  )
}
