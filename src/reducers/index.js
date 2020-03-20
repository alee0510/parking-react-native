// import combine reducer
import { combineReducers } from 'redux'

// import reducers
import { newsReducer } from './newsReducer'
import { userReducer } from './userReducer'
import { walletReducer } from './walletReducer'

// export all reducers
export default combineReducers({
    news : newsReducer,
    user : userReducer,
    wallet : walletReducer
})