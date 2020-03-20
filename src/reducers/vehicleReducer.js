import { GET_VEHICLE } from '../helpers/actionTypes'

export const vehicleReducer = (state = { data : [] }, action) => {
    switch(action.type) {
        case GET_VEHICLE :
            return { data : action.payload }
        default : return state
    }
}