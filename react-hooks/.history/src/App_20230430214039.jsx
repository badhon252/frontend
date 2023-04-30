import { Fragment } from "react";
import "./App.css";
// import HOC from "./Components/HOC/HOC";
// import Todo from './Components/Todo/Todo'
// import { useState } from 'react'
// import UseEffect from './Components/Hooks/UseEffect'
// import Game from './Game/Game'
// import UseState from './Components/Hooks/UseState'
// import Counter from './Components/Hooks/Counter'
import Counter from "./Components/Hooks/Counter/Counter";
// import Form from "./Components/Hooks/Counter/Form_ref/Form";
// import Hooks from "./Components/Hooks/Hooks";
// import Child from "./Components/content/Child";
// import Parent from "./Components/content/Parent";
import MyComponent from "./Components/Context/MyComponent";
import MyProvider from "./Components/Context/MyProvider";

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      {/* <UseState/> */}
      <Fragment>
        {/* <UseEffect/> */}
        {/* {show && <UseEffect/>}    */}
        {/* <Todo/> */}
      </Fragment>
      {/* <button onClick={()=>setShow((prev=>!prev))}>
        {show? "Hide post" : "Show post"}
      </button> */}
      {/* <Counter/> */}
      {/* <HOC /> */}
      {/* <Hooks/> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      Making Dark & light mode switcher
      <MyProvider>
        <MyComponent />
      </MyProvider>
    </div>
  );
}

export default App;
