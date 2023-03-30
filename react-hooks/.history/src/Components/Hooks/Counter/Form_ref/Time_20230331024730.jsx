import React,{useState, useRef, useEffect} from 'react';

const Time = () => {

    const [activity, setActivity] = useState(true);
    const  [time, setTime] = useState(()=>initialTime())

    const timer = useRef()

    function initialTime(){
        console.log("Initial Time")
        return new Date().toLocaleTimeString()
    }

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
        console.log(time)
    }

    useEffect(()=>{
        timer.current = setInterval(tick, 1000)
       return ()=>{
        clearInterval(timer.current)
       }
    },[])
    
    return (
        <div>
            <h1>Current Time:</h1>
            <button type='Button' onClick={()=>{
                setActivity(prev=>!prev)
                clearInterval(timer.current)
            }}>{activity? "Stop" : "Start"}</button>
            <h2>{time}</h2>
        </div>
    );
}

export default React.memo(Time);
