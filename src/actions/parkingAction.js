import Axios from 'axios'
import { AsyncStorage } from 'react-native'
import { PARKING_START, PARKING_END, ENTER_PARKING, LEAVE_PARKING } from '../helpers/actionTypes'

export const enterParking = async (url, id, type) => {
    return async (dispatch) => {
        try {
            dispatch({type : PARKING_START})
            console.log('do request to enter parking area')
            const { data } = await Axios.post(url, {
                user_id : id,
                vehicle_type : type
            })

            // set local storage
            console.log('set local storage')
            const token = Date.now()
            await AsyncStorage.setItem('parkingToken', token.toString())
            await AsyncStorage.setItem('cost', data[0].cost.toString())
            await AsyncStorage.setItem('parkingId', data[0].parking_id.toString())

            // set redux storage
            console.log('set redux storage')
            dispatch({ 
                type : ENTER_PARKING,
                payload : {
                    id : data[0].parking_id,
                    token : token,
                    cost : data[0].cost
                }
            })
            dispatch({type : PARKING_END})
        } catch (err) {
            dispatch({type : PARKING_END})
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const leaveParking = (url, area_id, duration) => {
    return async (dispatch) => {
        try {
            dispatch({type : PARKING_START})
            // calculate duration
            // const past = parseInt(await AsyncStorage.getItem('parkingToken'))
            // const duration = Math.ceil((past - Date.now())/60000)
            // console.log('parking duration : ', duration)
    
            console.log('do request leave parking area')
            const response = await Axios.post(url + area_id, {
                duration : duration < 10 ? 10 : duration
            })
            console.log(response.data)
    
            dispatch({type : LEAVE_PARKING})
            dispatch({type : PARKING_END})
        } catch (err) {
            dispatch({type : PARKING_END})
            console.log(err.response ? err.response.data : err)
        }
    }
}