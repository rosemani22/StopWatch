import { useEffect , useState } from "react";

function Stopwatch()
{
    const [ timer,setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    const formatTime = (seconds)=> {
        const minutes = Math.floor(seconds/60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    useEffect(()=>{
        let interval;
        if(isRunning)
        {
            interval = setInterval(()=>{
                setTimer((prevTimer)=>prevTimer+1);
            },100);
        }
        return (()=>{clearInterval(interval);
    })
        },[isRunning]);

    return (
        <>
        <h1>StopWatch</h1>
        <h2>Timer: {formatTime(timer)}</h2>
        <button onClick={()=>{
            setIsRunning((prev)=> !prev);
        }}>{isRunning? "Stop":"Start"}</button>
        <button onClick={()=>{
            setTimer(0);
            setIsRunning(false);
        }}> Reset</button>
        </>
    );
}

export default Stopwatch;