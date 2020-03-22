import Axios from 'axios'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { GET_HISTORY } from '../helpers/actionTypes'

export const getHistory = (id) => {
    return async (dispatch) => {
        try {
            console.log('request get history data')
            const { data } = await Axios.get(API_URL_MOBILE + `/history/${id}`)
            console.log('history request : ', data)
            dispatch({ type : GET_HISTORY, payload : data.reverse() })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}