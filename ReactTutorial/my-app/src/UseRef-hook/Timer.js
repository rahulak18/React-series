import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);

    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => clearInterval(timerRef);
    }, []);

    return (
        <div>
            <h1>Timer: {timer}</h1>
            <button onClick={() => { clearInterval(timerRef.current) }}>Clear timer</button>
        </div>
    )
}

export default Timer
