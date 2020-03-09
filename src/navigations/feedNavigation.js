import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Feed from '../screens/feed'

// create stack
const Stack = createStackNavigator()

const FeedNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'feed'>
            <Stack.Screen name = 'feed' component = {Feed}/>
        </Stack.Navigator>
    )
}

export default FeedNavigation