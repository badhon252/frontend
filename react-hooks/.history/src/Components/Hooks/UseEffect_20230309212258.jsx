import {useState,useEffect} from 'react';

const UseEffect = () => {

    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
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
