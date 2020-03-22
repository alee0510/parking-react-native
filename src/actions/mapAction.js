import Axios from 'axios'
import { API_URL } from '../helpers/API_URL'
import { GET_LOCATION } from '../helpers/actionTypes'

export const getParkingArea = () => {
    return async (dispatch) => {
        try {
            console.log('do request get parking area')
            const { data } = await Axios.get(API_URL + `/parking/area/data`)
            dispatch({
                type : GET_LOCATION, 
                payload : data.map(item => {
                    return { ...item, coordinates : JSON.parse(item.coordinates) }
                })
            })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}