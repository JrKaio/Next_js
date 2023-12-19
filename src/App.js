import React from 'react'
import Nomes from './Nomes';
import Forms from './Forms'
import FormsLDT from './FormsLDT';
//No Nomes a gente chamou a página de nomes, no aluno colocou nome e a idade, a idade 
//Se colocar as variáveis chamando diferente do que foi aplicado na outra página, não funcionará
// Idade = Com I Maiúsculo não funciona porque ele foi definido com letra mínuscula
const App = () => { // Funçao


  return (
    <div>
   
    <br/>
      <Nomes aluno="Lucas" idade= {24} />
      <br/>
     <Forms />
     <FormsLDT />
      

    </div>
  )
}

export default App;
