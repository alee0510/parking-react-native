import Axios from 'axios'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { GET_SALDO } from '../helpers/actionTypes'

export const getSaldo = (id) => {
    return async (dispatch) => {
        try {
            console.log('request get saldo')
            const { data } = await Axios.get(API_URL_MOBILE + `/wallet/saldo/${id}`)
            console.log('saldo : ', data)
    
            dispatch({ type : GET_SALDO, payload : data[0] })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}