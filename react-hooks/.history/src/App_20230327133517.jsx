import './App.css'
// import Todo from './Components/Todo/Todo'
// import { useState } from 'react'
// import UseEffect from './Components/Hooks/UseEffect'
// import Game from './Game/Game'
// import UseState from './Components/Hooks/UseState'
// import Counter from './Components/Hooks/Counter'
import IncreamentCounter from './Components/HOC/IncreamentCounter'
import WithHover from './Components/HOC/WithHover'

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      {/* <UseState/> */}
      <div>
         {/* <UseEffect/> */}
        {/* {show && <UseEffect/>}    */}
        {/* <Todo/> */}
      </div>
      {/* <button onClick={()=>setShow((prev=>!prev))}>
        {show? "Hide post" : "Show post"}
      </button> */}

      {/* <Counter/> */}

      <IncreamentCounter />
      <WithHover />
      console.log(WithHover, IncreamentCounter)
    </div>
  )
}

export default App
