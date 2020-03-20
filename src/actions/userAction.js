import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_URL, API_URL_MOBILE } from '../helpers/API_URL'
import { 
    LOG_IN,
    LOG_IN_ERROR, 
    USER_START,
    USER_END,
    LOG_OUT,
    CHECK_LOGIN,
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    GET_PROFILE,
    GET_ACCOUNT,
    EDIT_PASSWORD_ERROR,
    EDIT_PASSWORD_SUCCESS,
} from '../helpers/actionTypes'

export const LogIn = (body) => {
    return async (dispatch) => {
        try {
            console.log('do request login')
            console.log('body', body)
            dispatch({ type : USER_START })

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
            
            dispatch({ type : USER_END })
        } catch (err) {
            dispatch({type : USER_END})
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

// PROFILE
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

// ACCOUNT
export const editUsername = (username) => {
    return async (dispatch) => {
        try {
            dispatch({ type : USER_START })
            // get id
            const id = await AsyncStorage.getItem('id')
            console.log('get user id : ', id)

            // do request
            console.log('request edit username')
            const res = await Axios.patch(API_URL_MOBILE + `/account/edit/username/${id}`, {username})
            console.log(res.data)

            // refresh data
            const { data } = await Axios.get(API_URL_MOBILE + `/account/${id}`)
            console.log('account : ', data)

            dispatch({ type : GET_ACCOUNT, payload : data })
            dispatch({ type : USER_END })
        } catch (err) {
            dispatch({ type : USER_END })
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const editPassword = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type : USER_START })
            // get id
            const id = await AsyncStorage.getItem('id')
            console.log('get user id : ', id)

            // do request
            console.log('request edit password')
            console.log(body)
            const res = await Axios.patch(API_URL_MOBILE + `/account/edit/password/${id}`, body)
            console.log(res.data)

            dispatch({ type : EDIT_PASSWORD_SUCCESS })
            dispatch({ type : USER_END })
        } catch (err) {
            dispatch({ type : EDIT_PASSWORD_ERROR, payload : err.response ? err.response.data : err })
            dispatch({ type : USER_END })
            console.log(err.response ? err.response.data : err)
        }
    } 
}