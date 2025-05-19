import { useState } from "react"

export function App() {
  const [Esconder, setEsconder] = useState (false)
  const [numero, setNumero] = useState(100)

  function handleAumentar(){
    setNumero(numero + 100)
    console.log(numero)
  }

  function handleMostrarEsconder (){
    Esconder === true ? setEsconder(false) : setEsconder(true);
  }

  return(
    <section>
      <h1>App</h1>

      <div>
        <h2>numero:{numero}</h2>

        <button onClick={handleAumentar}>Aumentar</button>
        

        <button onClick={handleMostrarEsconder}>{Esconder === true ? "Esconder texto" : "Mostrar texto"}</button>
        {Esconder === true ? <p>Mostrar Texto</p> : "" }

      </div>
    </section>

  )
}

