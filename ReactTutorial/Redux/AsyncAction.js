const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").thunk;
const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data.map(item => item.id);
            dispatch(fetchUsersSuccess(users));
        }).catch(err => {
            dispatch(fetchUsersFailure(err.message));
        })
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
store.subscribe(() => {
    console.log("Updated state", store.getState());
})


// When you dispatch a regular action(i.e object having type property), Redux processes it synchronously through the reducers. 
// But when you dispatch a thunk (a function), redux-thunk intercepts the action. Redux Thunk middleware checks if the action is a function (instead of an object). If it's a function, Redux Thunk invokes it, passing the dispatch function as an argument.
store.dispatch(fetchUsers());