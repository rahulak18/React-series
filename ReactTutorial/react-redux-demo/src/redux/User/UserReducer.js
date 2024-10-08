import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const userInitState = {
    loading: true,
    user: [],
    err: ''
}

const userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                err: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                err: action.payload
            }

        default: return state;
    }
}

export default userReducer;