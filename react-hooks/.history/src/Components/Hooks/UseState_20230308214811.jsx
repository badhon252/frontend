import {useState} from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
           <button>+</button>
              <span>0</span>
           <button>-</button>
        </div>
    );
}

export default UseState;
