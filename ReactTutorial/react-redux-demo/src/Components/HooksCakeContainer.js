import React from 'react';
import { buyCake } from '../redux';
import { useDispatch, useSelector } from 'react-redux'

const HooksCakeContainer = () => {

    // useSelector hook is provided by the react redux library , it simply an alternative for the mapStateToProps function (which we have implemented in the CakeContainer component to map state to the props, now because of this hook it's become simple)
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hook Cake Container Component</h1>
            <p>Num of cakes - {numOfCakes}</p>
            <button onClick={() => { dispatch(buyCake()) }}>Click me</button>
        </div>
    )
}

export default HooksCakeContainer
