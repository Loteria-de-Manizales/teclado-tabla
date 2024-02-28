import { useState } from "react";

export const AgregarSorteo = ({agregarSorteo}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
       setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarSorteo(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingrese Sorteo"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
  )
}

