
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';

// Action is a plain js object having type as a mandatory property
// Action creation 
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "Buying a cake"
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

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

// unsubscribing
unsubscribe();