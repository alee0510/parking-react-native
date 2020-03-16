import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Login from '../screens/login'
import Register from '../screens/register'
import AddVehicle from '../screens/addVehicle'
import TabNavigation from './tabNavigation'
import GreetScreen from '../components/greeting'

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'login'>
            <Stack.Screen name = 'greet' component = {GreetScreen}/>
            <Stack.Screen name = 'login' component = {Login}/>
            <Stack.Screen name = 'register' component = {Register}/>
            <Stack.Screen name = 'add-vehicle' component = {AddVehicle}/>
            <Stack.Screen name = 'home' component = {TabNavigation}/>
        </Stack.Navigator>
    )
}

export default MainNavigation