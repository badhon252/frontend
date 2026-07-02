import {useState} from 'react';
import "./hooks.css"
function counter(){
    console.log('run');
    return 0;
}
const UseState = () => {
    //? I don't wanna re-render the whole component, just the part that changes
    const [count, setCount] = useState(counter);
    
    return (
        <div className='useStateHook'>
           <button onClick={()=>{setCount(count+1); console.log('run')}}> + </button>
              <span>{count}</span>
           <button onClick={()=>{setCount(count-1); console.log('run')}}> - </button>
        </div>
    );
}

export default UseState;
