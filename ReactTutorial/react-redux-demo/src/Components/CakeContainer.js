import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <p>No of cakes = {props.numOfCakes} </p>
            <button onClick={props.buyCake}>Click Me</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);