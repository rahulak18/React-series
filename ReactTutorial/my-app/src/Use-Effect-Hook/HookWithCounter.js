import React, { useEffect, useState } from 'react'

const HookWithCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevState => {
            return prevState + 1;
        })
    }

    // useEffect() == componentDidMount(), componentDidUpdate(), componentWillUnmount()

    // executed for every render 
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default HookWithCounter
