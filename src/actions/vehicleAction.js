import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { GET_VEHICLE } from '../helpers/actionTypes'

export const getVehicle = () => {
    return async (dispatch) => {
        try {
            console.log('do request get vehicle')

            const id = await AsyncStorage.getItem('id')
            console.log('user id : ', id)

            // do reuquest
            const { data } = await Axios.get(API_URL_MOBILE + `/vehicle/${id}`)
            dispatch({ type : GET_VEHICLE, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    } 
}