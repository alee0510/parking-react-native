import { GET_LOCATION } from '../helpers/actionTypes'

export const mapReducer = (state = { data : [] }, action) => {
    switch(action.type) {
        case GET_LOCATION :
            return { data : action.payload }
        default : return state
    }
}