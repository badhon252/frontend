import "./styles.css";
import { useState} from "react";
export default function Hooks() {
  function initValue() {
    console.log("Render");
    return 0;
  }
  const [count, setCount] = useState(() => initValue());

  function increament() {
    setCount(count + 1);
  }
  function Decreament() {
    setCount(count - 1);
  }

  return (
    <div className="">
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
      </div>
    </div>
  );
}
