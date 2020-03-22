import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { 
    PARKING_START, 
    PARKING_END, 
    ENTER_PARKING, 
    LEAVE_PARKING, 
    CHECK_PARKING, 
    GIVE_RATING
} from '../helpers/actionTypes'
import { API_URL_MOBILE } from '../helpers/API_URL'

export const enterParking = (url, id, type) => {
    return async (dispatch) => {
        try {
            dispatch({type : PARKING_START})
            console.log('do request to enter parking area')
            console.log('user_id : ', id)
            console.log('vehicle_type : ', type)
            console.log(API_URL_MOBILE + url)
            const { data } = await Axios.post(API_URL_MOBILE + url, {
                user_id : id,
                vehicle_type : type
            })
            console.log(data)
            console.log(data[0].cost)

            // set local storage
            console.log('set local storage')
            const token = Date.now()
            await AsyncStorage.setItem('parkingToken', token.toString())
            await AsyncStorage.setItem('cost', data[0].cost.toString())
            await AsyncStorage.setItem('parkingId', data[0].parking_id.toString())
            await AsyncStorage.setItem('place', data[0].place_name)
            await AsyncStorage.setItem('areaId', url.split('/')[3])

            // set redux storage
            console.log('set redux storage')
            dispatch({ 
                type : ENTER_PARKING,
                payload : {
                    id : data[0].parking_id,
                    token : token,
                    cost : data[0].cost,
                    place : data[0].place_name,
                    areaId : url.split('/')[3]
                }
            })
            dispatch({type : PARKING_END})
        } catch (err) {
            dispatch({type : PARKING_END})
            console.log(err)
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const leaveParking = (url, parkingId, duration) => {
    return async (dispatch) => {
        try {
            dispatch({type : PARKING_START})
            // calculate duration
            // const past = parseInt(await AsyncStorage.getItem('parkingToken'))
            // const duration = Math.ceil((past - Date.now())/60000)
            // console.log('parking duration : ', duration)
    
            console.log('do request leave parking area')
            const response = await Axios.post(API_URL_MOBILE + url + parkingId, {duration})
            console.log(response.data)
    
            // clear local storage
            await AsyncStorage.removeItem('parkingToken')
            await AsyncStorage.removeItem('cost')
            await AsyncStorage.removeItem('parkingId')
            await AsyncStorage.removeItem('place')
            await AsyncStorage.removeItem('areaId')

            dispatch({type : LEAVE_PARKING})
            dispatch({type : PARKING_END})
        } catch (err) {
            dispatch({type : PARKING_END})
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const checkParking = () => {
    return async (dispatch) => {
        try {
            // restore token
            console.log('restore parking token')
            const token = parseInt(await AsyncStorage.getItem('parkingToken'))
            const id = parseInt(await AsyncStorage.getItem('parkingId'))
            const cost = parseInt(await AsyncStorage.getItem('cost'))
            const place = await AsyncStorage.getItem('place')
            const areaId = await AsyncStorage.getItem('areaId')

            if (!token) return null

            // set redux storage
            console.log('setup redux for parking')
            dispatch({ 
                type : CHECK_PARKING,
                payload : { id, token, cost, place, areaId }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const giveRating = (body) => {
    return async (dispatch) => {
        try {
            dispatch({type : PARKING_START})
            console.log('body', body)
            // request give parking
            const response = await Axios.post(API_URL_MOBILE + `/rating`, body)
            console.log(response.data)

            dispatch({type : GIVE_RATING})
        } catch (err) {
            dispatch({type : PARKING_END})
            console.log(err.response ? err.response.data : err)
        }
    }
}