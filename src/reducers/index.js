// import combine reducer
import { combineReducers } from 'redux'

// import reducers
import { newsReducer } from './newsReducer'
import { userReducer } from './userReducer'

// export all reducers
export default combineReducers({
    news : newsReducer,
    user : userReducer
})