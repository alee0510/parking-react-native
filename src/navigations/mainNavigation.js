import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

// import action creator
import { CheckLogin } from '../actions'

// import screens
import Login from '../screens/main/login'
import Register from '../screens/main/register'
import AddVehicle from '../screens/main/addVehicle'
import SendOTP from '../screens/main/sendOTP'
import VerifyOTP from '../screens/main/verifyOTP'
import TabNavigation from './tabNavigation'

// splash screen
import SplashScreen from '../components/splashScreen'
import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator()

class MainNavigation extends React.Component {
    state = {
        token : null
    }

    componentDidMount () {
        this.props.CheckLogin()
        this.getToken()
    }

    getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            console.log('token : ', token)
            this.setState({token : token })
        } catch (err) {
            console.log(err)
        }
    }
    
    render () {
        if (this.props.loading) {
            return <SplashScreen/>
        }
        const { token } = this.state
        console.log('state token : ', token)
        return (
            <Stack.Navigator headerMode = 'none' initialRouteName = 'Login'>
                {
                    this.props.account == null ? (
                        <>
                        <Stack.Screen name = 'Login' component = {Login}/>
                        <Stack.Screen name = 'Register' component = {Register}/>
                        <Stack.Screen name = 'Add-Vehicle' component = {AddVehicle}/>
                        <Stack.Screen name = 'Sent-OTP' component = {SendOTP}/>
                        <Stack.Screen name = 'Verify-OTP' component = {VerifyOTP}/>
                        <Stack.Screen name = 'Home' component = {TabNavigation}/>
                        </>
                    ) : (
                        <Stack.Screen name = 'Home' component = {TabNavigation}/>
                    )
                }
            </Stack.Navigator>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        loading : user.check,
        account : user.account
    }
}

export default connect(mapStore, { CheckLogin })(MainNavigation)