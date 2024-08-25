import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {

    const [count, setCount] = useState(1);

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Icecream Container Component</h1>
            <p>Num of icecreams - {noOfIceCreams}</p>
            <button onClick={() => { dispatch(buyIceCream()) }}>Click me (By default 1 icecream will be decremented)</button>
            <br />
            <input type="number" value={count} onChange={(e) => { setCount(e.target.value) }} />
            <button onClick={() => {
                dispatch(buyIceCream(count));
            }}
                disabled={count <= 0}
            >Buy {count} ice creams</button>
        </div>
    )
}

export default IceCreamContainer
