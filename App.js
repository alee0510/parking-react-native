import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

// import main navigation
import MainNavigation from './src/navigations/mainNavigation'

// import reducer
import Reducers from './src/reducers'

class App extends React.Component {
    render () {
        console.disableYellowBox = true
        return (
            <Provider store = {createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
                <NavigationContainer>
                    <MainNavigation/>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App