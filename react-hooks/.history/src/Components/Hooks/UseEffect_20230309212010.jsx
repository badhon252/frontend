import {useEffect} from 'react';

const UseEffect = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }, []);

    return (
        <div>
            <h1>useEffect hook</h1>
        </div>
    );
}

export default UseEffect;
