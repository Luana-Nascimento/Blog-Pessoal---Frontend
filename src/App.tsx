import Home from './pages/home/Home'
import './App.css'
import React, {useState} from 'react'

function App() {
  const [contador, setContador] = useState(1)
  function somar(){
    setContador(contador + 1)
  }
  return (

    <div>
    <h1> App</h1>
    <p> O valor é: {contador} </p> 
    <button onClick={somar}>Adicionar + 1</button>
    </div>
    )
}

export default App


