import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import navigation
import FeedNavigation from './feedNavigation'
import SettingNavigation from './settingNavigation'
import QrScanner from '../screens/qrSanner'

const Tabs = createBottomTabNavigator()

const TabNavigation = () => {
    return(
        <Tabs.Navigator
            screenOptions = {({ route }) => ({
                tabBarVisible : route.name === 'qr-scanner' ? false : true
            })}
        >
            <Tabs.Screen name = 'feed-navigation' component = {FeedNavigation}/>
            <Tabs.Screen name = 'qr-scanner' component = {QrScanner}/>
            <Tabs.Screen name = 'setting-navigation' component = {SettingNavigation}/>
        </Tabs.Navigator>
    )
}

export default TabNavigation