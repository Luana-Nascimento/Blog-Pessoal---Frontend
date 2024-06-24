
import React, {useState, useEffect} from 'react'

interface myProps{
  titulo: string,
  texto: string,
}

function Home(props: myProps){
  
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');
  
  /*espera um motivo para causar um efeito,ex: efeito do botão de comprar > colocar o produto no carrinho, ao acionar 2x a senha, posso comparar ambas para ver se está correta. */ 
  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }
    }, [completed])

  return (
    <div> 
      <h1> Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  )
}

export default Home

