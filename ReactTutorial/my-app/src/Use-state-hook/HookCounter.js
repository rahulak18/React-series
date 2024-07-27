import React, { useState } from 'react'

const HookCounter = () => {

    // Always use hooks at top inside the react component functions
    // Always update the state using the previous State rather than updating directly. (i.e. setCount(prevState => prevState - 1); but not setCount(0))

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    }

    const decrement = () => {
        setCount(prevState => prevState - 1);
    }

    return (
        <div>
            <h3>Clicked {count} times.</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
        </div>
    )
}

export default HookCounter
