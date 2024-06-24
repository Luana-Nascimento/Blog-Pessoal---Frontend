import imagem from '../../assets/html-css-collage-concept.jpg'

interface myProps{
  titulo: string,
  texto: string,
}

function Home(props: myProps){

  /*const [state (variável), setState] = useState(initialState);*/
  
  /*espera um motivo para causar um efeito,ex: efeito do botão de comprar > colocar o produto no carrinho, ao acionar 2x a senha, posso comparar ambas para ver se está correta 
    useEffect(() => {
      alert('para de somar')}, [contador])

    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('Clique no botão para finalizar a tarefa');

    /*cookbook
    useEffect(() => {
      if (completed) {
        setTarefa('Parabéns! Você concluiu a tarefa!');
      }
    }, [completed]);*/

  return (
    <>
        {/*<h1 style={{fontSize: '24px'}}>{props.titulo} </h1>
        <p> {props.texto}</p>
        <img src={imagem} alt="" height={150} /> */}
   
   {/* <h1>{contador}</h1>
    <button onClick={somar}>Adicionar + 1</button>

    <h3>{tarefa}</h3>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button> */}
    

    {/*if ternário}

    {logado == false ? <button onClick={() => {setLogado(true)}}>Cloque aqui para logar</button> 
    : <h1>Parabéns você está logado</h1> */}
    
    </>
  )
}

export default Home

