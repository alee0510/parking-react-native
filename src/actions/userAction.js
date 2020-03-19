import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_URL } from '../helpers/API_URL'
import { 
    LOG_IN_START,
    LOG_IN_END,
    LOG_IN,
    LOG_IN_ERROR, 
    LOG_OUT,
    STAY_LOGIN,
} from '../helpers/actionTypes'

export const LogIn = (body) => {
    return async (dispatch) => {
        try {
            console.log('do request login')
            console.log('body', body)
            dispatch({ type : LOG_IN_START })
            // ruequest login
            const { data, headers } = await Axios.post(API_URL + '/user/login', body)
            console.log('data : ', data)
            console.log('token : ', headers['auth-token'])
            dispatch({ type : LOG_IN, payload : data })

            console.log('set local storage')
            // set local storage
            await AsyncStorage.setItem('token', headers['auth-token'])
            dispatch({ type : LOG_IN_END })
        } catch (err) {
            dispatch({ 
                type : LOG_IN_ERROR, 
                payload : err.response ? err.response.data : err
            })
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const LogOut = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.clear()
            dispatch({ type : LOG_OUT })
        } catch (err) {
            console.log(err)
        }
    }
}

export const StayLogin = () => {
    return async (dispatch) => {
        try {
            console.log('check token')
            // get token
            const token = await AsyncStorage.getItem('token')
            if (!token) throw 'invalid token.'

            console.log('do request stay login')
            // ruequest get user account
            const options = { headers : {'Auth-Token' : token} }
            const { data } = await Axios.get(API_URL + `/user/staylogin`, options)
            dispatch({ type : STAY_LOGIN, payload : data })

        } catch (err) {
            dispatch({ 
                type : LOG_IN_ERROR, 
                payload : err.response ? err.response.data : err
            })
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const Register = (body) => {
    return async (dispatch) => {
        try {
            // do request register
            await Axios.post(API_URL + `/user/register`, body)
        } catch (err) {
            log(err.response ? err.response.data : err)
        }
    }
}