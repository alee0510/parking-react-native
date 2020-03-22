import { 
    ENTER_PARKING, 
    LEAVE_PARKING, 
    PARKING_START, 
    PARKING_END, 
    CHECK_PARKING, 
    GIVE_RATING
} from '../helpers/actionTypes'

const INITIAL_STATE = {
    id : null,
    token : null, // fill witdh date
    duration: 10,
    cost: 0,
    place : '',
    status : 0,
    loading : false,
    rating : false,
    areaId : null
}

export const parkingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENTER_PARKING :
            return {
                ...state, 
                id : action.payload.id, 
                token : action.payload.token,
                cost : action.payload.cost,
                place : action.payload.place,
                areaId : action.payload.areaId,
                status : 1
            }
        case CHECK_PARKING :
            return {
                ...state, 
                id : action.payload.id, 
                token : action.payload.token,
                cost : action.payload.cost,
                place : action.payload.place,
                areaId : action.payload.areaId,
                status : 1
            }
        case LEAVE_PARKING :
            return { ...state, token : null, cost : 0, place : '', rating : true }
        case GIVE_RATING :
            return INITIAL_STATE
        case PARKING_START :
            return { ...state, loading : true }
        case PARKING_END :
            return { ...state, loading : false }
        default : return state
    }
}