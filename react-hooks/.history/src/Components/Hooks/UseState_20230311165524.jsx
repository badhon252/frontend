import {useState} from 'react';
import "./hooks.css"

const UseState = () => {
    //? I don't wanna re-render the whole component, just the part that changes
    // const [count, setCount] = useState(0);
    
    const [items, setItems] = useState(["Learn React","Learn Firebase","Learn GraphQL"]);
    const [todo, setTodo] = useState([]);

    function handleChange(e){
        console.log(e.target.value)
        setItems(e.target.value)

    }
  
    function handleClick(e){
        e.preventDefault();
        console.log("clicked")
        if(!items) return;
        setItems()
        setTodo(todo.map(currElm=>{
            return [...currElm, items]
        }))
        console.log(todo)
    }
    

    return (
        <div className='useStateHook'>
           {/* <button onClick={()=>{setCount(count+1); console.log('run')}}> + </button>
              <span>{count}</span>
           <button onClick={()=>{setCount(count<=0?0:count-1); console.log('run')}}> - </button> */}
        
            <div id="todos">
                <form action="#" onChange={e=>console.log(e.target.valuea)}>
                    <input onChange={handleChange} type="text" placeholder="Add a todo"/>
                    <button onClick={handleClick} className="btn">Add todo</button>
                </form>
                <ul className="todos">
                    {/* {todo.map((todo,index)=>{
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })} */}
                </ul>
            </div>
        </div>
    );
}

export default UseState;
