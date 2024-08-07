
const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'ICE_CREAM';

// Action is a plain js object having type as a mandatory property
// Action creation 
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "Buying a cake"
    }
}
const buyIceCreams = () => {
    return {
        type: BUY_ICE_CREAM,
        info: "Buying a ice creams"
    }
}

const initialState = {
    numOfCakes: 10,
    numofIceCreams: 20
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };

        case BUY_ICE_CREAM:
            return {
                ...state,
                numofIceCreams: state.numofIceCreams - 1
            };

        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("Initial state : ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated state : ", store.getState());
})

// Dispatching an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

// unsubscribing
unsubscribe();