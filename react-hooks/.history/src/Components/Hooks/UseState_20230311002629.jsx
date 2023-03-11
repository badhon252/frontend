import {useState} from 'react';
import "./hooks.css"

const UseState = () => {
    //? I don't wanna re-render the whole component, just the part that changes
    // const [count, setCount] = useState(0);
    const [todos, setTodo] = useState(["Learn React","Learn Firebase","Learn GraphQL"]);
  
    return (
        <div className='useStateHook'>
           {/* <button onClick={()=>{setCount(count+1); console.log('run')}}> + </button>
              <span>{count}</span>
           <button onClick={()=>{setCount(count<=0?0:count-1); console.log('run')}}> - </button> */}
        
        <div id="todos">
            <form action="#" >
                <input onChange={(e)=>setTodo(()=>e.target.value)} type="text" placeholder="Add a todo"/>
                <button className="btn">Add todo</button>
            </form>
            <ul className="todos">
                {todos && todos.map((todo=>{
                    return <li  className="todo">{todo}</li>
                }))}
            </ul>
        </div>
        </div>
    );
}

export default UseState;
