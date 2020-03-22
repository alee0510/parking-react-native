import Axios from 'axios'
import { API_URL_MOBILE } from '../helpers/API_URL'
import { 
    GET_SALDO, 
    GET_HISTORY_TRANSATION, 
    TRANSACTION_START,
    TRANSACTION_END,
    TRANSACTION_ERROR
} from '../helpers/actionTypes'

export const getSaldo = (id) => {
    return async (dispatch) => {
        try {
            console.log('request get saldo')
            const { data } = await Axios.get(API_URL_MOBILE + `/wallet/saldo/${id}`)
            console.log('saldo : ', data)
    
            dispatch({ type : GET_SALDO, payload : data })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const getHistoryTransaction = (id) => {
    return async (dispatch) => {
        try {
            console.log('request get history transaction')
            const { data } = await Axios.get(API_URL_MOBILE + `/wallet/history/${id}`)
            console.log('history transaction : ', data)
    
            dispatch({ type : GET_HISTORY_TRANSATION, payload : data.reverse() })
        } catch (err) {
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const topUpSaldo = (id, body) => {
    return async (dispatch) => {
        try {
            dispatch({type : TRANSACTION_START})
            console.log('request request topup')
            console.log(body)
            // do authentication
            if(body.password) {
                console.log('check password')
                const { data } = await Axios.post(API_URL_MOBILE + `/account/confirm/${id}`, {
                    password : body.password
                })
                console.log(err)
                if (data !== true) throw new Error('invalid password.')
            }
            delete body.password

            // do request
            console.log('request top up')
            const response = await Axios.post(API_URL_MOBILE + `/wallet/topup/${id}`, body)
            console.log('topup response : ', response.data)

            // refresh history
            const history = await Axios.get(API_URL_MOBILE + `/wallet/history/${id}`)
            console.log('history transaction : ', history.data)
            dispatch({ type : GET_HISTORY_TRANSATION, payload : history.data.reverse() })

            // refresh saldo
            const saldo = await Axios.get(API_URL_MOBILE + `/wallet/saldo/${id}`)
            console.log('saldo : ', saldo.data)
            dispatch({ type : GET_SALDO, payload : saldo.data })

            dispatch({type : TRANSACTION_END })
        } catch (err) {
            dispatch({type : TRANSACTION_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    }
}

export const payParking = (id, amount) => {
    return async (dispatch) => {
        try {
            dispatch({type : TRANSACTION_START})
            console.log('do request pay parking')
            const response = await Axios.post(API_URL_MOBILE + `/parking/pay/${id}`, {
                total : amount
            })
            console.log(response.data)
            
            // refresh history
            const history = await Axios.get(API_URL_MOBILE + `/wallet/history/${id}`)
            console.log('history transaction : ', history.data)
            dispatch({ type : GET_HISTORY_TRANSATION, payload : history.data.reverse() })

            // refresh saldo
            const saldo = await Axios.get(API_URL_MOBILE + `/wallet/saldo/${id}`)
            console.log('saldo : ', saldo.data)
            dispatch({ type : GET_SALDO, payload : saldo.data })
            
            dispatch({type : TRANSACTION_END})
        } catch (err) {
            dispatch({type : TRANSACTION_ERROR, payload : err.response ? err.response.data : err})
            console.log(err.response ? err.response.data : err)
        }
    }
}