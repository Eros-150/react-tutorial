import React, { useState } from "react";
import Tabla from "./Tabla";
import Form from "./Form";



const App = () => {
  const [personas, setPersonas] = useState([]);

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((_, i) => i !== indice));
  };

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]);
  };

  return (
    <div className="container">
      <h1>2DAW: Testeando React Eros</h1>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />
      <Form enviarFormulario={enviarFormulario} />
    </div>
  );
};

export default App;

