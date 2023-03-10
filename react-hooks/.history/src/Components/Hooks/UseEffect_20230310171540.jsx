import {useState,useEffect} from 'react';
import "./hooks.css"

const UseEffect = () => {

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);
    const [text, setText] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType]); //? Because of this, the useEffect will only run when the resourceType changes

    useEffect(()=>{
        console.log("useEffect called");
    },[])
    function onChange(e){
        console.log(text)
        return setText(e.target.value)
    }

    return (
        <>

        <div className="form">
            <h1>useEffect hook</h1>
            <input type="text" onChange={onChange} value={text} />

        </div>

            {/* <div>
                <h1>useEffect hook</h1>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>

            <h1>{resourceType}</h1>
            <ul>
                {items && items.map(item => {
                    return <li key={item.id}>{item.title || item.name}</li>
                })}
            </ul> */}
        </>
    );
}

export default UseEffect;
