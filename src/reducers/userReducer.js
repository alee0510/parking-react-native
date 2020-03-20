import { 
    LOG_IN,
    LOG_IN_START,
    LOG_IN_END, 
    LOG_IN_ERROR, 
    LOG_OUT,
    GET_PROFILE, 
    CHECK_LOGIN, 
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    INIT_EDIT_PROFILE,
    INPUT_EDIT_PROFILE,
    EDIT_PROFILE_START,
    EDIT_PROFILE_END
} from "../helpers/actionTypes"

const INITIAL_STATE = {
    account : null,
    profile : null,
    error : '',
    loading : false,
    check : false,
    edit : false 
}

const INITIAL_EDIT_PROFILE = {
    edit : false,
    name : '',
    birthdate : '',
    phone : '',
    address : ''
}

export const userReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case LOG_IN :
            return { ...state, account : action.payload, error : '' }
        case LOG_IN_START : 
            return { ... state, loading : true }
        case LOG_IN_END : 
            return { ...state, loading : false }
        case CHECK_LOGIN : 
            return { ...state, account : action.payload }
        case CHECK_LOGIN_START : 
            return { ...INITIAL_STATE, check : true }
        case CHECK_LOGIN_END : 
            return { ...state, check : false }
        case GET_PROFILE : 
            return { ...state, profile : action.payload }
        case LOG_IN_ERROR :
            return { ...INITIAL_STATE, error : action.payload, loading : false }
        case LOG_OUT :
            return INITIAL_STATE
        default : return state
    }
}

export const editProfileReducer = (state = INITIAL_EDIT_PROFILE, action) => {
    switch(action.type) {
        case INIT_EDIT_PROFILE :
            return { ...state, ...action.payload }
        case INPUT_EDIT_PROFILE :
            return { ...state, [action.payload.key] : action.payload.value }
        case EDIT_PROFILE_START :
            return { ...state, edit : true }
        case EDIT_PROFILE_END :
            return INITIAL_EDIT_PROFILE
        default : return state
    }
}