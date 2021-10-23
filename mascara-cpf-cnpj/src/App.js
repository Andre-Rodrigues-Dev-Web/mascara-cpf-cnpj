import React, { useState } from "react";
import './App.css';

//Mascara
import {mask} from "./mascara";

const App = () => {

  const [valor, setValor] = useState('')

  const handleChangeMask = (event) => {
    const { value } = event.target
    setValor(mask(value))
  }

  return (
    <div className="container">
      <form className="form">
        <input 
        placeholder="Digite seu CPF, ou, CNPJ"
        onChange={handleChangeMask} value={valor}
        type="text" />
      </form>
    </div>
  );
}

export default App;
