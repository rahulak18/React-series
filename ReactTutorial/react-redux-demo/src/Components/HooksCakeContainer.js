import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () => {

    // useSelector hook is provided by the react redux library , it simply an alternative for the mapStateToProps function (which we have implemented in the CakeContainer component to map state to the props, now because of this hook it's become simple)
    const numOfCakes = useSelector(state => state.numOfCakes)

    return (
        <div>
            <p>Num of cakes - {numOfCakes}</p>
            <button>Click me</button>
        </div>
    )
}

export default HooksCakeContainer
