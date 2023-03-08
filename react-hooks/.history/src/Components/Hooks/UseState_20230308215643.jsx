import {useState} from 'react';
import "./hooks.css"

const UseState = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='useStateHook'>
           <button onClick={()=>{setCount(count+1); console.log('run')}}> + </button>
              <span>{count}</span>
           <button onClick={()=>{setCount(count-1); console.log('run')}}> - </button>
        </div>
    );
}

export default UseState;
