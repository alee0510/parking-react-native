import { 
    GET_SALDO, 
    GET_HISTORY_TRANSATION,
    TRANSACTION_START, 
    TRANSACTION_END,
    TRANSACTION_ERROR
} from '../helpers/actionTypes'

const INITIAL_STATE = {
    data : null,
    history : [],
    loading : false,
    error : ''
}

export const walletReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_SALDO :
            return {...state, data : action.payload }
        case GET_HISTORY_TRANSATION : 
            return {...state, history : action.payload }
        case TRANSACTION_START :
            return { ...state, loading : true }
        case TRANSACTION_END :
            return { ...state, loading : false, error : '' }
        case TRANSACTION_ERROR :
            return { ...state, loading : false, error : action.payload }
        default : return state
    }
}