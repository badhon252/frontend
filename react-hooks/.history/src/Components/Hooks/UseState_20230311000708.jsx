import {useState} from 'react';
import "./hooks.css"

const UseState = () => {
    //? I don't wanna re-render the whole component, just the part that changes
    const [count, setCount] = useState(0);
    
    return (
        <div className='useStateHook'>
           {/* <button onClick={()=>{setCount(count+1); console.log('run')}}> + </button>
              <span>{count}</span>
           <button onClick={()=>{setCount(count<=0?0:count-1); console.log('run')}}> - </button> */}
        
        <div className="todos">
            <form action="#">
                <input type="text" placeholder="Add a todo"/>
                <button className="button">Add todo</button>
            </form>
        </div>
        </div>
    );
}

export default UseState;
