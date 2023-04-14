import React, { useState } from 'react';

const Form = ({ enviarFormulario }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: ''
  });

  const gestionarCambio = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    enviarFormulario(formData);
    setFormData({ nombre: '', apellido: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" className="form-control" value={formData.nombre} onChange={gestionarCambio} />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" className="form-control" value={formData.apellido} onChange={gestionarCambio} />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Form;

  
