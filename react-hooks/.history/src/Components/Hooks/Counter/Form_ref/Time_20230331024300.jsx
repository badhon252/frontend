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
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[time])
    
    return (
        <div>
            <h1>Current Time:</h1>
            <button type='Button' onClick={()=>{
                setActivity(prev=>!prev)
                if(activity){
                    timer.current = setInterval(tick, 1000)
                }else{
                    clearInterval(timer.current)
                }
            }}>{activity? "Stop" : "Starte"}</button>
            <h2>{time}</h2>
        </div>
    );
}

export default React.memo(Time);
