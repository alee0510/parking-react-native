import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Feed from '../screens/feed'
import Notification from '../screens/notification'
import Map from '../screens/map'

// create stack
const Stack = createStackNavigator()

const FeedNavigation = ({navigation, route}) => {
    console.log(route.state)
    navigation.setOptions({ tabBarVisible : route.state ? route.state.index > 0 ? false : true : null})
    return (
        <Stack.Navigator 
            headerMode = 'none' 
            initialRouteName = 'feed'
            screenOptions = {({ route }) => ({
                tabBarVisible : false
            })}
        >
            <Stack.Screen name = 'feed' component = {Feed}/>
            <Stack.Screen name = 'notification' component = {Notification}/>
            <Stack.Screen name = 'map' component = {Map}/>
        </Stack.Navigator>
    )
}

export default FeedNavigation