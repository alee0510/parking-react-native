import { 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_ERROR, 
    REGISTER_VEHICLE_SUCCESS,
    REGISTER_VEHICLE_ERROR,
    SENT_OTP_SUCCESS,
    SENT_OTP_ERROR,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_ERROR
} from "../helpers/actionTypes"

const INITIAL_STATE = {
    userId : '',
    phone : '',
    request_id : '',
    registerStatus : false,
    registerVehicleStatus : false,
    sendOTPStatus : false,
    verified : false, // sttaus after OTP verification,
    loading : false,
    error : ''
}

export const registerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_START :
            return { ...state, loading : true }
        case REGISTER_SUCCESS : 
            return { ...state, loading : false, registerStatus : true, userId : action.payload }
        case REGISTER_ERROR : 
            return { ...state, loading : false, error : action.payload }
        case REGISTER_VEHICLE_SUCCESS :
            return { ...state, loading : false, registerVehicleStatus : true }
        case REGISTER_VEHICLE_ERROR :
            return { ...state, loading : false, error : action.payload }
        case SENT_OTP_SUCCESS :
            return { ...state, loading: false, request_id : action.payload.request_id, phone : action.payload.phone }
        case SENT_OTP_ERROR :
            return { ...state, loading : false, error : action.payload }
        case VERIFY_OTP_SUCCESS :
            return INITIAL_STATE
        case VERIFY_OTP_ERROR :
            return{ ...state, loading : false, error : action.payload }
        default : return state
    }
}