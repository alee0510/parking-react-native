import { 
    LOG_IN,
    LOG_IN_START,
    LOG_IN_END, 
    LOG_IN_ERROR, 
    LOG_OUT,
    GET_PROFILE, 
    STAY_LOGIN 
} from "../helpers/actionTypes"

const INITIAL_STATE = {
    account : null,
    profile : null,
    error : '',
    loading : false 
}

export const userReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case LOG_IN :
            return { ...state, account : action.payload, error : '' }
        case LOG_IN_START : 
            return { ... state, loading : true }
        case LOG_IN_END : 
            return { ...state, loading : false }
        case GET_PROFILE : 
            return { ...state, profile : action.payload }
        case LOG_IN_ERROR :
            return { ...INITIAL_STATE, error : action.payload, loading : false }
        case LOG_OUT :
            return INITIAL_STATE
        default : return state
    }
}