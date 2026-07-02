import { useState} from "react";
export default function Hooks() {

    //!We can define like this to avoid unusual re-renders
//   function initValue() {
//     console.log("Render");
//     return 0;
//   }
//   const [count, setCount] = useState(() => initValue());
  
//!Or we can define like this
  const [count, setCount] = useState(function initValue() {
        console.log("Render");
        return 0;
  });

  function increament() {
    setCount(count + 1);
  }
  function Decreament() {
    setCount(count - 1);
  }

  return (
    <div className="">
      <div className="counter">
        <hr />
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
      </div>
    </div>
  );
}
