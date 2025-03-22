import React from 'react';
import "./AtajosTeclado.css";

function AtajosTeclado() {
    return (
        <>
            <div className="atajos-container">
                <p><strong>Atajos de teclado:</strong></p>
                <p><kbd className="key">S</kbd> - Guardar número y serie actual y avanzar al siguiente premio</p>
                <p><kbd className="key">W</kbd> - Retroceder al premio anterior</p>
                <p><kbd className="key">A</kbd>/<kbd className="key">D</kbd> - Moverse entre los campos de entrada</p>
            </div>
        </>
    )
}

export default AtajosTeclado;