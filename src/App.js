import React from 'react'
import Nomes from './Nomes';
import Forms from './Forms'
import FormsLDT from './FormsLDT';
import UsingEffects from './UsingEffects';

const App = () => { // Funçao


  return (
    <div>
   
    <br/>
      <Nomes aluno="Lucas" idade= {24} />
      <br/>
     <Forms />
     <FormsLDT />
     <UsingEffects />
    
      

    </div>
  )
}

export default App;
