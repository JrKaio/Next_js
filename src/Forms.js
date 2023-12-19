import React, { useState } from 'react'


const Forms = () => {
  const [nome, setNome] = useState ('')
  const [idade, setIdade] = useState ('')
  const [email, setEmail] = useState ('')
  const [user, setUser] = useState({})
function handleRegister(e) {
  e.preventDefault();
setUser({
  nome: nome,
  idade: idade,
  email:email,
})
}
  return (
    <div>
    <h1>Cadastro de Usuários</h1>
    <form onSubmit={handleRegister}>
    <label> Nome: </label> <br/>
    <input placeholder='Digite seu nome'
    value={nome}
    onChange={(e) => setNome(e.target.value)} />
    <br/> 

    <br/>
    <label> Email: </label> <br/>
    <input placeholder='Digite seu email'
    value={email}
    onChange={(e) => setEmail(e.target.value)} />
    <br/> 

    <br/>
    <label> Idade: </label> <br/>
    <input placeholder='Digite sua idade'
    value={idade}
    onChange={(e) => setIdade(e.target.value)} />
    <br/>
    <br/>
    <button type="submit"> Registrar</button>
    <br/> 
    <br/> 

    </form> 
    <br/> 
    <br/> 
    <div>
    <span>Bem vindo: {user.nome}</span> <br/>
    <span>Idade:{user.idade}</span> <br/>
    <span>Email:{user.email}</span>

    </div>
    </div>
  )
}

export default Forms
