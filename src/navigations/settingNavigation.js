import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Setting from '../screens/setting'
import Profile from '../screens/profile'

// create stack
const Stack = createStackNavigator()

const SettingNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'profile'>
            <Stack.Screen name = 'setting' component = {Setting} />
            <Stack.Screen name = 'profile' component = {Profile} />
        </Stack.Navigator>
    )
}

export default SettingNavigation