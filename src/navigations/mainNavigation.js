import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Login from '../screens/main/login'
import Register from '../screens/main/register'
import AddVehicle from '../screens/main/addVehicle'
import SendOTP from '../screens/main/sendOTP'
import VerifyOTP from '../screens/main/verifyOTP'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'Add-Vehicle'>
            <Stack.Screen name = 'Login' component = {Login}/>
            <Stack.Screen name = 'Register' component = {Register}/>
            <Stack.Screen name = 'Add-Vehicle' component = {AddVehicle}/>
            <Stack.Screen name = 'Sent-OTP' component = {SendOTP}/>
            <Stack.Screen name = 'Verify-OTP' component = {VerifyOTP}/>
            <Stack.Screen name = 'Home' component = {TabNavigation}/>
        </Stack.Navigator>
    )
}

export default MainNavigation