import Axios from 'axios'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { 
    GET_VEHICLE, 
    GET_CAR_BRAND, 
    GET_MOTOR_BRAND, 
    GET_CAR_TYPE,
    GET_MOTOR_TYPE,
    EDIT_VEHICLE_START,
    EDIT_VEHICLE_END
} from '../helpers/actionTypes'

export const getVehicle = (id) => {
    return async (dispatch) => {
        try {
            console.log('do request get vehicle')
            // do request
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/${id}`)
            console.log('vehilce : ', data)
            dispatch({type : GET_VEHICLE, payload : data})
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    } 
}

// get brand
export const getCarBrand = () => {
    return async (dispatch) => {
        try {
            // do request
            console.log('do request get car brand')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/car/brand`)
            console.log(data)
            dispatch({type : GET_CAR_BRAND, payload : data})
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getMotorBrand = () => {
    return async (dispatch) => {
        try {
            // do request
            console.log('do request get motor brand')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/motor/brand`)
            console.log(data)
            dispatch({type : GET_MOTOR_BRAND, payload : data})
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

// get type by brand id
export const getCarTypeById = (id) => {
    return async (dispatch) => {
        try {
            // do request
            console.log('do request get car type')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/car/type/${id}`)
            console.log(data)
            dispatch({type : GET_CAR_TYPE, payload : data})
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getMotorTypeById = (id) => {
    return async (dispatch) => {
        try {
            // do request
            console.log('do request get motor type')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/motor/type/${id}`)
            console.log(data)
            dispatch({ type : GET_MOTOR_TYPE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

// edit vehicle
export const editVehicle = (id, body) => {
    return async (dispatch) => {
        try {
            dispatch({type : EDIT_VEHICLE_START})
            // do request edit
            console.log('request edit vehicle')
            if (!body.color) delete body.color
            console.log(body)
            const response = await Axios.put(API_URL_MOBILE + `/vehicle/edit/${id}`, body)
            console.log(response.data)

            // refresh redux data
            console.log('refresh get data')
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/${id}`)
            console.log('new vehilce : ', data)
            dispatch({type : GET_VEHICLE, payload : data})
            dispatch({type : EDIT_VEHICLE_END})
        } catch (err) {
            dispatch({type : EDIT_VEHICLE_END})
            console.log(err.response ? err.response.data : err)
        }
    }
}