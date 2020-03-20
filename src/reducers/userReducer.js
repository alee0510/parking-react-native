import { 
    LOG_IN,
    LOG_IN_ERROR, 
    USER_START,
    USER_END,
    LOG_OUT,
    GET_PROFILE,
    GET_ACCOUNT, 
    CHECK_LOGIN, 
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    EDIT_PASSWORD_ERROR,
    EDIT_PASSWORD_SUCCESS,
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
        case EDIT_PASSWORD_ERROR :
            return { ...state, error : action.payload }
        case EDIT_PASSWORD_SUCCESS :
            return { ...state, error : ''}
        case LOG_OUT :
            return INITIAL_STATE
        default : return state
    }
}