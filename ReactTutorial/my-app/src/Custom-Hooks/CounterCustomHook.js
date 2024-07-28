import React from 'react'
import useCounter from './useCounter'

const CounterCustomHook = () => {
    const [count, increment, decrement, reset] = useCounter(10);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterCustomHook
