import { GET_HISTORY } from '../helpers/actionTypes'

export const historyRedducer = (state = { data : [] }, action) => {
    switch(action.type) {
        case GET_HISTORY :
            return { data : action.payload }
        default : return state
    }
}