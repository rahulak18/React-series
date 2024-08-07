
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numofIceCreams: 20
}


const cakeReducer = (state = initialCakeState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };

        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {

    switch (action.type) {

        case BUY_ICE_CREAM:
            return {
                ...state,
                numofIceCreams: state.numofIceCreams - 1
            };

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger));
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