import React,{useState, useRef, useEffect} from 'react';

const Time = () => {

    const [activity, setActivity] = useState(true);
    const  [time, setTime] = useState(()=>initialTime())

    function initialTime(){
        console.log("Initial Time")
        return new Date().toLocaleTimeString()
    }

    const tick = () => {
                setTime(new Date().toLocaleTimeString())
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[time])
    
    return (
        <div>
            <h1>Current Time:</h1>
            <button type='Button' onClick={()=>setActivity(prev=>!prev)}>{activity? "Stop" : "State"}</button>
            <h2>{time}</h2>
        </div>
    );
}

export default Time;
