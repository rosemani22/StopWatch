import React from "react";
import { useState, useEffect } from "react";

const Watch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isRunning, timer]);

    const formatTime = (secs) => {
        const mins = Math.floor(secs / 60);
        const remainingSecs = secs % 60;
        return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
    };

    const startReset = () => {
        setIsRunning(!isRunning);
    };

    const resetHandler = () => {
        setTimer(0);
        setIsRunning(false);
    };
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(timer)}</p>
            <button onClick={startReset}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default Watch;