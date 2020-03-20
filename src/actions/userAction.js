import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_URL, API_URL_MOBILE } from '../helpers/API_URL'
import { 
    LOG_IN_START,
    LOG_IN_END,
    LOG_IN,
    LOG_IN_ERROR, 
    LOG_OUT,
    CHECK_LOGIN,
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    GET_PROFILE,
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
            console.log('id', data['id'])
            await AsyncStorage.setItem('id', data['id'].toString())
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
    return { type : LOG_OUT }
}

export const CheckLogin = () => {
    return async (dispatch) => {
        try {
            console.log('check token')
            dispatch({ type : CHECK_LOGIN_START })
            // get token
            const token = await AsyncStorage.getItem('token')
            if (!token) throw 'invalid token.'

            console.log('do request stay login')
            // ruequest get user account
            const options = { headers : {'Auth-Token' : token} }
            const { data } = await Axios.get(API_URL + `/user/staylogin`, options)
            console.log('staylogin data : ', data)
            dispatch({ type : CHECK_LOGIN, payload : data })

            dispatch({ type : CHECK_LOGIN_END })
        } catch (err) {
            dispatch({ type : CHECK_LOGIN_END })
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getProfile = (id) => {
    return async (dispatch) => {
        try {
            console.log('request get profile')
            const { data } = await Axios.get(API_URL_MOBILE + `/profile/${id}`)
            console.log('profile : ', data)

            dispatch({ type : GET_PROFILE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}