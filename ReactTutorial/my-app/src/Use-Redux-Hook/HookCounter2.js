import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + (action.value || 1) };

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - (action.value || 1) };

        case 'reset':
            return initialState;

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + (action.value || 1) };

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - (action.value || 1) };

        default:
            return state;
    }

}

const HookCounter2 = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>First counter {count.firstCounter}</p>
            <p>Second counter {count.secondCounter}</p>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Increment first counter</button>
            <button onClick={() => { dispatch({ type: 'increment', value: 2 }) }}>Increment first counter by 2</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement first counter</button>
            <button onClick={() => { dispatch({ type: 'decrement', value: 5 }) }}>Decrement first counter by 5</button>
            <button onClick={() => { dispatch({ type: 'increment2' }) }}>Increment second counter</button>
            <button onClick={() => { dispatch({ type: 'increment2', value: 2 }) }}>Increment second counter by 2</button>
            <button onClick={() => { dispatch({ type: 'decrement2', value: 2 }) }}>Decrement second counter by 2</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>

        </div>
    )
}

export default HookCounter2
