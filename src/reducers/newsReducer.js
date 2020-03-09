import { GET_NEWS } from '../helpers/actionTypes'

export const newsReducer = (state = { data : []}, action) => {
    switch(action.type) {
        case GET_NEWS :
            return { data : action.payload }
        default : return state
    }
}