import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"


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
