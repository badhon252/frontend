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
        console.log("Component loaded!")
        timer.current = setInterval(tick, 1000)

       return ()=>{
        clearInterval(timer.current)
        console.log("Component Unloaded!")
       }
    },[])

    const timeHandler = ()=>{
                setActivity(prev=>!prev)
                if(!activity){
                    setInterval(timer.current)
                }else{
                    clearInterval(timer.current)
                }
            }
    
    return (
        <div>
            <hr />
            <h1>Current Time:</h1>
            <h2>{time}</h2>
            <button type='Button' onClick={timeHandler}> 
              {activity? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default React.memo(Time);
