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
            initialRouteName = 'setting'
        >
            <Stack.Screen name = 'setting' component = {Setting} />
            <Stack.Screen name = 'profile' component = {Profile} />
            <Stack.Screen name = 'username' component = {Username} />
            <Stack.Screen name = 'password' component = {Password} />
            <Stack.Screen name = 'vehicle' component = {Vehicle} />
            <Stack.Screen name = 'wallet' component = {Wallet} />
            <Stack.Screen name = 'history' component = {History}/>
        </Stack.Navigator>
    )
}

export default SettingNavigation