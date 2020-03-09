import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import navigation
import FeedNavigation from './feedNavigation'
import SettingNavigation from './settingNavigation'
import QrScanner from '../screens/qrSanner'

const Tabs = createBottomTabNavigator()

const TabNavigation = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen name = 'feed-navigation' component = {FeedNavigation}/>
            <Tabs.Screen name = 'qr-scanner' component = {QrScanner}/>
            <Tabs.Screen name = 'setting-navigation' component = {SettingNavigation}/>
        </Tabs.Navigator>
    )
}

export default TabNavigation