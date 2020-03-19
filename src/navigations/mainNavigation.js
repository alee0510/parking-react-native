import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Login from '../screens/main/login'
import Register from '../screens/main/register'
import AddVehicle from '../screens/main/addVehicle'
import SendOTP from '../screens/main/sendOTP'
import VerifyOTP from '../screens/main/verifyOTP'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()

class MainNavigation extends React.Component {
    async componentDidMount () {

    }
    render () {
        return (
            <Stack.Navigator headerMode = 'none' initialRouteName = 'Login'>
                <Stack.Screen name = 'Login' component = {Login}/>
                <Stack.Screen name = 'Register' component = {Register}/>
                <Stack.Screen name = 'Add-Vehicle' component = {AddVehicle}/>
                <Stack.Screen name = 'Sent-OTP' component = {SendOTP}/>
                <Stack.Screen name = 'Verify-OTP' component = {VerifyOTP}/>
                <Stack.Screen name = 'Home' component = {TabNavigation}/>
            </Stack.Navigator>
        )
    }
}

// const MainNavigation = () => {
//     return (
//         <Stack.Navigator headerMode = 'none' initialRouteName = 'login'>
//             {/* <Stack.Screen name = 'greet' component = {GreetScreen}/> */}
//             <Stack.Screen name = 'login' component = {Login}/>
//             <Stack.Screen name = 'register' component = {Register}/>
//             <Stack.Screen name = 'add-vehicle' component = {AddVehicle}/>
//             <Stack.Screen name = 'sent-otp' component = {SendOTP}/>
//             <Stack.Screen name = 'verify-otp' component = {VerifyOTP}/>
//             <Stack.Screen name = 'home' component = {TabNavigation}/>
//         </Stack.Navigator>
//     )
// }

export default MainNavigation