import { 
    LOG_IN,
    LOG_IN_ERROR, 
    USER_START,
    USER_END,
    LOG_OUT,
    GET_PROFILE, 
    CHECK_LOGIN, 
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
} from "../helpers/actionTypes"

const INITIAL_STATE = {
    account : null,
    profile : null,
    error : '',
    loading : false,
    check : false
}

export const userReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case LOG_IN :
            return { ...state, account : action.payload, error : '' }
        case USER_START : 
            return { ... state, loading : true }
        case USER_END : 
            return { ...state, loading : false }
        case CHECK_LOGIN : 
            return { ...state, account : action.payload }
        case CHECK_LOGIN_START : 
            return { ...INITIAL_STATE, check : true }
        case CHECK_LOGIN_END : 
            return { ...state, check : false }
        case GET_PROFILE : 
            return { ...state, profile : action.payload }
        case GET_ACCOUNT :
            return { ...state, account : action.payload }
        case LOG_IN_ERROR :
            return { ...INITIAL_STATE, error : action.payload, loading : false }
        case LOG_OUT :
            return INITIAL_STATE
        default : return state
    }
}