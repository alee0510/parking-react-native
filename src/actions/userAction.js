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
    INIT_EDIT_PROFILE,
    INPUT_EDIT_PROFILE,
    EDIT_PROFILE_START,
    EDIT_PROFILE_END,
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

export const editProfile = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type : EDIT_PROFILE_START })
            console.log('request edit profile')
            console.log('request body : ', body)
            const id = await AsyncStorage.getItem('id')
            console.log('user id : ', id)
            delete body.edit
            await Axios.patch(API_URL_MOBILE + `/profile/edit/${id}`, body)

            // do refresh data
            console.log('do refresh data')
            const { data } = await Axios.get(API_URL_MOBILE + `/profile/${id}`)
            console.log('new profile : ', data)

            dispatch({ type : GET_PROFILE, payload : data })
            dispatch({ type : EDIT_PROFILE_END })
        } catch (err) {
            dispatch({ type : EDIT_PROFILE_END })
            console.log(err.response ? err.response.data : err)
        }
    }
}
export const initEditProfile = (data) => {
    return {
        type : INIT_EDIT_PROFILE,
        payload : data
    }
}

export const inputEditProfile = (key, value) => {
    return {
        type : INPUT_EDIT_PROFILE,
        payload : { key, value }
    }
}
