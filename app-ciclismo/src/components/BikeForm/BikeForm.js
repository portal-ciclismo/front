import React, { useState } from 'react';
import './BikeForm.css';

function BikeForm({ onSubmit }) {
  const [frameBrand, setFrameBrand] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [frameMaterial, setFrameMaterial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ frameBrand, wheelSize, frameMaterial });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Marca do Quadro:</label>
        <input
          className="form-input"
          type="text"
          value={frameBrand}
          onChange={(e) => setFrameBrand(e.target.value)}
        />

        <label className="form-label">Tamanho da Roda:</label>
        <input
          className="form-input"
          type="text"
          value={wheelSize}
          onChange={(e) => setWheelSize(e.target.value)}
        />

        <label className="form-label">Material do Quadro:</label>
        <input
          className="form-input"
          type="text"
          value={frameMaterial}
          onChange={(e) => setFrameMaterial(e.target.value)}
        />

        <button className="form-button" type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default BikeForm;
