import "./hooks.css"
import {useState,useEffect} from 'react';

const UseEffect = () => {

    // const [resourceType, setResourceType] = useState("posts");
    // const [items, setItems] = useState([]);
    // const [text, setText] = useState();
    
    const [date, setDate] = useState(()=> new Date());

    function tick(){
        setDate(()=>new Date()) 
        console.log("Component did mount!")
    }

    useEffect(() => {
       const interval = setInterval(tick, 1000);
       console.log("Component did mount!")
        return ()=>{
            console.log("Component did unmounted")
            clearInterval(interval);
        }
    })

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    // }, [resourceType]); //? Because of this, the useEffect will only run when the resourceType changes

    // useEffect(()=>{
    //     console.log("useEffect called, text");
    // },[text])
    

    return (
        <>

        <div className="time">
            <h1>Time</h1>
            <h2>{date.toLocaleTimeString()}</h2>
            

        </div>

        {/* <div className="form">
            <h1>useEffect hook</h1>
            <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </div> */}

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
