import React, { useReducer } from 'react'
import CounterA from './CounterA';
import CounterD from './CounterD';
import CounterB from './CounterB';


export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state
    }
}

const CounterWithTwoHooks = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>

            {/* Note : A single state is shared among all  */}

            <p>Count : {count}</p>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
                <CounterA />
                <CounterB />
                <CounterD />
            </CountContext.Provider>
        </div>
    )
}

export default CounterWithTwoHooks
