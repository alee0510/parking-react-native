import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Login from '../screens/login'
import Register from '../screens/register'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none'>
            <Stack.Screen name = 'home' component = {TabNavigation}/>
            <Stack.Screen name = 'login' component = {Login}/>
            <Stack.Screen name = 'register' component = {Register}/>
        </Stack.Navigator>
    )
}

export default MainNavigation