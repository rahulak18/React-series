import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Icecream Container Component</h1>
            <p>Num of icecreams - {noOfIceCreams}</p>
            <button onClick={() => { dispatch(buyIceCream()) }}>Click me</button>
        </div>
    )
}

export default IceCreamContainer
