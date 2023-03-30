import React,{useState, useRef, useEffect} from 'react';

const Time = () => {
    function initialTime(){
        console.log("Initial Time")
        return new Date().toLocaleTimeString()
    }
    const  [time, setTime] = useState(()=>initialTime())

    useEffect(()=>{
                const interval = setInterval(()=>{
                setTime(new Date().toLocaleTimeString())
                }, 1000)
    },[time])
    return (
        <div>
            <h1>Current Time:</h1>
                <h2>{time}</h2>
        </div>
    );
}

export default Time;
