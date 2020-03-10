import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Setting from '../screens/setting'
import Profile from '../screens/profile'
import Username from '../screens/username'
import Password from '../screens/password'

// create stack
const Stack = createStackNavigator()

const SettingNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'password'>
            <Stack.Screen name = 'setting' component = {Setting} />
            <Stack.Screen name = 'profile' component = {Profile} />
            <Stack.Screen name = 'username' component = {Username} />
            <Stack.Screen name = 'password' component = {Password} />
        </Stack.Navigator>
    )
}

export default SettingNavigation