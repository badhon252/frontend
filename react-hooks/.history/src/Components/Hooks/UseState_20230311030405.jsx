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
                    <input  type="text" placeholder="Add a todo"/>
                    <button onClick={(e)=>console.log(this.target.value || [])} className="btn">Add todo</button>
                </form>
                <ul className="todos">
                    {todos.map((todo,index)=>{
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default UseState;
