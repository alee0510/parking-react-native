import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Login from '../screens/main/login'
import Register from '../screens/main/register'
import AddVehicle from '../screens/main/addVehicle'
import SendOTP from '../screens/main/sendOTP'
import VerifyOTP from '../screens/main/verifyOTP'
import TabNavigation from './tabNavigation'
import GreetScreen from '../components/greeting'

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'home'>
            <Stack.Screen name = 'greet' component = {GreetScreen}/>
            <Stack.Screen name = 'login' component = {Login}/>
            <Stack.Screen name = 'register' component = {Register}/>
            <Stack.Screen name = 'add-vehicle' component = {AddVehicle}/>
            <Stack.Screen name = 'sent-otp' component = {SendOTP}/>
            <Stack.Screen name = 'verify-otp' component = {VerifyOTP}/>
            <Stack.Screen name = 'home' component = {TabNavigation}/>
        </Stack.Navigator>
    )
}

export default MainNavigation