// import combine reducer
import { combineReducers } from 'redux'

// import reducers
import { newsReducer } from './newsReducer'
import { userReducer } from './userReducer'
import { walletReducer } from './walletReducer'
import { vehicleReducer } from './vehicleReducer'
import { registerReducer } from './registerReducer'

// export all reducers
export default combineReducers({
    news : newsReducer,
    user : userReducer,
    wallet : walletReducer,
    vehicle : vehicleReducer,
    register : registerReducer
})