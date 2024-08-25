import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h1>Cake container component</h1>
            <p>No of cakes = {props.numOfCakes} </p>
            <button onClick={props.buyCake}>Click Me</button>
        </div>
    )
}

const mapStateToProps = (state, componentsOwnProps) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch, componentsOwnProps) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);