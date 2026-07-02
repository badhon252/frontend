import {useState} from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='useStateHook'>
           <button onClick={()=>setCount(count+1)}> + </button>
              <span>{count}</span>
           <button onClick={()=>setCount(count-1)}> - </button>
        </div>
    );
}

export default UseState;
