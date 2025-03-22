import React from 'react';
import sorteo from '../data/Sorteo.json';
import "./SorteoInfo.css";

function SorteoInfo() {
  return (
    <div className="sorteo-info">
      <div className="sorteo-container">
        <div className="sorteo-content">
          <div className="sorteo-item">
            <span className="sorteo-label">SORTEO:</span>
            <span className="sorteo-value">{sorteo.sorteo}</span>
          </div>
          <div className="sorteo-item">
            <span className="sorteo-label">FECHA:</span>
            <span className="sorteo-value">{sorteo.fecha}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SorteoInfo;