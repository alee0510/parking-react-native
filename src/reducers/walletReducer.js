import { GET_SALDO } from '../helpers/actionTypes'

export const walletReducer = (state = { data : null}, action) => {
    switch(action.type) {
        case GET_SALDO :
            return { data : action.payload }
        default : return state
    }
}