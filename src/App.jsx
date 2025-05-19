import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(0)

  function handleAumentar(){
    setNumero(numero + 1)
  }
  return(
    <section>
      <h1>App</h1>

      <div>
        <h2>numero:{numero}</h2>
        <button onClick={handleAumentar}>Aumentar</button>
      </div>
    </section>
  )
}

