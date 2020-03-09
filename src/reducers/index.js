// import combine reducer
import { combineReducers } from 'redux'

// import reducers
import { newsReducer } from './newsReducer'

// export all reducers
export default combineReducers({
    news : newsReducer
})