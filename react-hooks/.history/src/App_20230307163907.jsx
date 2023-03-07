import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './Game/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game/>
    </div>
  )
}

export default App
