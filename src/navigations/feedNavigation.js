import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Feed from '../screens/feed/feed'
import Notification from '../screens/feed/notification'
import Map from '../screens/feed/map'
import MyWebView from '../components/webView'
import MapWebView from '../components/mapWebView'

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
            <Stack.Screen name = 'Web-View' component = {MyWebView}/>
            <Stack.Screen name = 'Map-Web' component = {MapWebView}/>
        </Stack.Navigator>
    )
}

export default FeedNavigation