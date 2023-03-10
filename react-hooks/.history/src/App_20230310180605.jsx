import './App.css'
import { useState } from 'react'
import UseEffect from './Components/Hooks/UseEffect'
// import Game from './Game/Game'
// import UseState from './Components/Hooks/UseState'

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Game/> */}
      {/* <UseState/> */}
      <UseEffect/>
    </div>
  )
}

export default App
