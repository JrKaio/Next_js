import React, { useState } from 'react'

const FormsLDT = () => {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(['Pagar a conta de luz',
'Estudar ReactJs'])
function handleRegister(e){
e.preventDefault();
setTarefas([...tarefas, input]);
setInput(input);
}
  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
      <label> Nome da tarefa: </label> <br/>
    <input placeholder='Digite uma tarefa'
    value={input}
    onChange={(e) => setInput(e.target.value)} />
    <br/>
    <button type='submit'>Registrar</button>
    <br/>
    <br/>
      </form>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default FormsLDT