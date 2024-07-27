import React, { useEffect, useState } from 'react'

const HookWithDependencies = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const incrementCount = () => {
        setCount(prevState => prevState + 1);
    }

    // Entire syntax for useEffect hook
    useEffect(() => {
        // Normal callback function: This is where you perform your side effect
        // For example, you might fetch data, set up a subscription, etc.

        // Cleanup function: This is optional and will run just before the component unmounts or
        // before the effect function is re-run due to changes in dependencies
        return () => {
            // Perform cleanup actions here
            // For example, you might clear timers, unsubscribe from a service, etc.
        };
    }, ['dependencies']); // Dependencies array: Effect function will run whenever any of these dependencies change, if not specified then it'll run for every render, if we specified empty array [] then it'll run only once that is non first rendering.


    // renders only when the count value changes
    useEffect(() => {
        console.log('useEffect hook called');
        document.title = `You clicked ${count} times`;
    }, [count])

    //    This hook will only get invoked once , that is on initial rendering 
    useEffect(() => {
        console.log('useEffect hook called');
        document.title = `You clicked ${count} times`;
    }, [count])


    return (
        <div>
            <input type="text" value={name} onChange={(evt) => { setName(evt.target.value) }} />
            <button onClick={incrementCount}>Clicked {count} times </button>
        </div>
    )
}

export default HookWithDependencies
