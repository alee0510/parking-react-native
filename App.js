import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import main navigation
import MainNavigation from './src/navigations/mainNavigation'

class App extends React.Component {
    render () {
        return (
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
        )
    }
}

export default App