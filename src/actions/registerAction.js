import Axios from 'axios'
import { API_URL, API_URL_MOBILE } from '../helpers/API_URL'
import { 
    REGISTER_START, 
    REGISTER_ERROR, 
    REGISTER_SUCCESS, 
    REGISTER_VEHICLE_SUCCESS, 
    REGISTER_VEHICLE_ERROR,
    SENT_OTP_SUCCESS,
    SENT_OTP_ERROR,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_ERROR,
    LOG_IN
} from '../helpers/actionTypes'
import AsyncStorage from '@react-native-community/async-storage'

// submit user account data
export const register = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_START })
            // do request register user
            console.log('request register user account')
            console.log(body)
            const { data } = await Axios.post(API_URL + `/user/register`, body)
            console.log(data)

            dispatch({ type : REGISTER_SUCCESS, payload : data.id })
        } catch (err) {
            dispatch({ type : REGISTER_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const registerVehicle = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_START })
            // do request register user
            console.log('request register user vehicle')
            console.log(body)
            const response = await Axios.post(API_URL + `/user/register/vehicle`, body)
            console.log(response.data)

            dispatch({ type : REGISTER_VEHICLE_SUCCESS })
        } catch (err) {
            dispatch({ type : REGISTER_VEHICLE_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const sendOTP = (phone) => {
    return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_START })
            console.log(phone)
            // do request OTP
            console.log('request one time password (OTP)')
            const { data } = await Axios.post(API_URL_MOBILE + `/OTP/request`, {phone})
            console.log(data)

            dispatch({ 
                type : SENT_OTP_SUCCESS, 
                payload : { phone, request_id : data }
            })
        } catch (err) {
            dispatch({ type : SENT_OTP_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    }
}

// need : user id, phone, and request_id
export const verifyOTP = (id, body) => {
    return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_START })
            // do verify
            console.log('request verify one time password (OTP)')
            const { data, headers } = await Axios.post(API_URL_MOBILE + `/OTP/verify/${id}`, body)
            console.log(data)
            console.log(headers['auth-token'])

            // set local storage
            console.log('set local storage')
            await AsyncStorage.setItem('id', data['id'].toString())
            await AsyncStorage.setItem('token', headers['auth-token'])

            // add account data
            dispatch({ type : LOG_IN, payload : data })
            dispatch({ type : VERIFY_OTP_SUCCESS })
        } catch (err) {
            dispatch({ type : VERIFY_OTP_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    } 
}