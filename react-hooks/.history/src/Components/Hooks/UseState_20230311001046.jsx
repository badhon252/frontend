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
        
        <div id="todos">
            <form action="#" onSubmit={(e)=>console.log(e.target)}>
                <input type="text" placeholder="Add a todo"/>
                <button className="btn">Add todo</button>
            </form>
            <ul className="todos">
                <li className="todo">Learn React</li>
                <li className="todo">Learn Firebase</li>
                <li className="todo">Learn GraphQL</li>
            </ul>
        </div>
        </div>
    );
}

export default UseState;