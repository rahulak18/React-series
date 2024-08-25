import { BUY_ICECREAM } from "./IcecreamTypes"

const icecreamInitState = {
    noOfIceCreams: 20
}

const iceCreamReducer = (state = icecreamInitState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - action.payload
            }
        default:
            return state;

    }
}

export default iceCreamReducer;
