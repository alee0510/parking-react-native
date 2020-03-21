import Axios from 'axios'
import { GET_NEWS } from '../helpers/actionTypes'
import { NEWS_API_URL } from '../helpers/API_URL'

export const getNews = () => {
    return async (dispatch) => {
        try {
            const response = await Axios.get(NEWS_API_URL)
            console.log('articles : ', response.data.articles)
            dispatch({
                type : GET_NEWS,
                payload : response.data.articles
            })
        } catch (err) {
            console.log(err)
        }
    }
}