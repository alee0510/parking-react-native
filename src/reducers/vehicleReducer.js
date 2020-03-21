import { GET_VEHICLE, GET_CAR_BRAND, GET_CAR_TYPE, GET_MOTOR_BRAND, GET_MOTOR_TYPE, GET_VEHICLE_ERROR } from '../helpers/actionTypes'

export const vehicleReducer = (state = { data : [] }, action) => {
    switch(action.type) {
        case GET_VEHICLE :
            return { data : action.payload }
        default : return state
    }
}

const INITIAL_STATE = {
    carBrand : [],
    motorBrand : [],
    carType : [],
    motorType : []
}

export const vehicleDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CAR_BRAND : 
            return { ...state, carBrand : action.payload }
        case GET_CAR_TYPE :
            return { ...state, carType : action.payload }
        case GET_MOTOR_BRAND :
            return { ...state, motorBrand : action.payload }
        case GET_MOTOR_TYPE :
            return { ...state, motorType : action.payload }
        case GET_VEHICLE_ERROR :
            return INITIAL_STATE
        default : return state
    }
}