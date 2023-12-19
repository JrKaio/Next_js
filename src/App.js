import React from 'react'
import Nomes from './Nomes';
import { useState } from 'react';
//No Nomes a gente chamou a página de nomes, no aluno colocou nome e a idade, a idade 
//Se colocar as variáveis chamando diferente do que foi aplicado na outra página, não funcionará
// Idade = Com I Maiúsculo não funciona porque ele foi definido com letra mínuscula
const App = () => { // Funçao
  const [aluno, setAluno] = useState('Sujeito Programador') // começa com esse nome
  const [count, setCount] = useState(0); // Começou com 0
  function handleChangeName(){
    setAluno('Matheus') // setAluno é pra mudar o nome
  }
  return (
    <div>
      <h1>Componente App</h1>
      <br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={handleChangeName}>
        Mudar nome
      </button>
    <br/>
      <Nomes aluno="Lucas" idade= {24} />
      
      <br/>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
      

    </div>
  )
}

export default App;
