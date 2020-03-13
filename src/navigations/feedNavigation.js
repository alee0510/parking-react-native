import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Feed from '../screens/feed'
import FingerPrint from '../components/2fa'

// create stack
const Stack = createStackNavigator()

const FeedNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'feed'>
            <Stack.Screen name = 'feed' component = {Feed}/>
            <Stack.Screen name = '2fa' component = {FingerPrint}/>
        </Stack.Navigator>
    )
}

export default FeedNavigation