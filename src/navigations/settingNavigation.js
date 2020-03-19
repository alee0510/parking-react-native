import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Setting from '../screens/setting/setting'
import Profile from '../screens/setting/profile'
import Username from '../screens/setting/username'
import Password from '../screens/setting/password'
import Vehicle from '../screens/setting/vehicle'
import Wallet from '../screens/setting/wallet'
import History from '../screens/setting/history'

// create stack
const Stack = createStackNavigator()

const SettingNavigation = () => {
    return (
        <Stack.Navigator 
            headerMode = 'none' 
            initialRouteName = 'Setting'
        >
            <Stack.Screen name = 'Setting' component = {Setting} />
            <Stack.Screen name = 'Profile' component = {Profile} />
            <Stack.Screen name = 'Username' component = {Username} />
            <Stack.Screen name = 'Password' component = {Password} />
            <Stack.Screen name = 'Vehicle' component = {Vehicle} />
            <Stack.Screen name = 'Wallet' component = {Wallet} />
            <Stack.Screen name = 'History' component = {History}/>
        </Stack.Navigator>
    )
}

export default SettingNavigation