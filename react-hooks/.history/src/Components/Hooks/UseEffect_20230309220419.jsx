import {useState,useEffect} from 'react';
import "./hooks.css"

const UseEffect = () => {

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType]);

    return (
        <div>
            <div>
                <h1>useEffect hook</h1>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>

            <h1>{resourceType}</h1>
            <ul>
                {items && items.map(item => {
                    return <li key={item.id}>{JSON.stringify(item.title|| item.name)}</li>
                })}
            </ul>
        </div>
    );
}

export default UseEffect;
