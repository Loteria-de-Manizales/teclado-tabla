import { useState } from "react";

export const AgregarResultado = ({agregarResultado}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
       setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarResultado(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingrese resultado"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
  )
}

