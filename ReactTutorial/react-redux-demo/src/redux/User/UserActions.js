import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes";
import axios from "axios";

export const fetchUserReq = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserScss = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserErr = (err) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: err
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserReq());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchUserScss(users));
            })
            .catch(err => {
                const errorMsg = err.message;
                dispatch(fetchUserErr(errorMsg));
            })
    }
}
