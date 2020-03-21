import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { 
    GET_VEHICLE, 
    GET_CAR_BRAND, 
    GET_MOTOR_BRAND, 
    GET_CAR_TYPE,
    GET_MOTOR_TYPE
} from '../helpers/actionTypes'

export const getVehicle = (id) => {
    return async (dispatch) => {
        try {
            console.log('do request get vehicle')
            // do reuquest
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/${id}`)
            console.log('vehilce : ', data)
            dispatch({ type : GET_VEHICLE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    } 
}

// get brand
export const getCarBrand = () => {
    return async (dispatch) => {
        try {
            // do reuquest
            console.log('do request get car brand')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/car/brand`)
            console.log(data)
            dispatch({ type : GET_CAR_BRAND, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getMotorBrand = () => {
    return async (dispatch) => {
        try {
            // do reuquest
            console.log('do request get motor brand')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/motor/brand`)
            console.log(data)
            dispatch({ type : GET_MOTOR_BRAND, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

// get type by brand id
export const getCarTypeById = (id) => {
    return async (dispatch) => {
        try {
            // do reuquest
            console.log('do request get car type')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/car/type/${id}`)
            console.log(data)
            dispatch({ type : GET_CAR_TYPE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getMotorTypeById = (id) => {
    return async (dispatch) => {
        try {
            // do reuquest
            console.log('do request get motor type')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/motor/type/${id}`)
            console.log(data)
            dispatch({ type : GET_MOTOR_TYPE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}