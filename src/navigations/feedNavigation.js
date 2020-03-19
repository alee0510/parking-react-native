import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Feed from '../screens/feed/feed'
import Notification from '../screens/feed/notification'
import Map from '../screens/feed/map'

// create stack
const Stack = createStackNavigator()

const FeedNavigation = ({navigation, route}) => {
    // console.log(route.state)
    navigation.setOptions({ tabBarVisible : route.state ? route.state.index > 0 ? false : true : null})
    return (
        <Stack.Navigator 
            headerMode = 'none' 
            initialRouteName = 'Feed'
            screenOptions = {({ route }) => ({
                tabBarVisible : false
            })}
        >
            <Stack.Screen name = 'Feed' component = {Feed}/>
            <Stack.Screen name = 'Notification' component = {Notification}/>
            <Stack.Screen name = 'Map' component = {Map}/>
        </Stack.Navigator>
    )
}

export default FeedNavigation