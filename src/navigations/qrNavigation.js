import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screen
import QrScanner from '../screens/qrSanner'
import Payment from '../screens/payParking'

const Stack = createStackNavigator()

const QrNavigation = () => {
    return (
        <Stack.Navigator initialRouteName = 'Qr-Scanner' headerMode = 'none'>
            <Stack.Screen name = 'Qr-Scanner' component = {QrScanner}/>
            <Stack.Screen name = 'Payment' component = {Payment}/>
        </Stack.Navigator>
    )
    
}

export default QrNavigation