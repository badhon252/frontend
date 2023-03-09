import {useState,useEffect} from 'react';

const UseEffect = () => {

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType]);

    return (
        <div>
            <h1>useEffect hook</h1>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>

            <ul>
            {items.map(item=>{
                return <li>{JSON.strignify(item)}</li>
            })}
            </ul>
        </div>
    );
}

export default UseEffect;
