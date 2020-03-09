import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import styles
import { colors } from '../styles'

// import navigation
import FeedNavigation from './feedNavigation'
import SettingNavigation from './settingNavigation'
import QrScanner from '../screens/qrSanner'

// import svg icons
import HomeIcon from '../assets/tab-icons/home.svg'
import HomeIconOutline from '../assets/tab-icons/home_outline.svg'
import Menu from '../assets/tab-icons/menu.svg'
import MenuOutline from '../assets/tab-icons/menu_outline.svg'
import QrIcon from '../components/qrIcon'

const Tabs = createBottomTabNavigator()

const TabNavigation = () => {
    return(
        <Tabs.Navigator
            tabBarOptions = {{
                showLabel : false,
                style : {
                    height : 55
                }
            }}
            screenOptions = {({ route }) => ({
                tabBarVisible : route.name === 'qr-scanner' ? false : true,
                tabBarIcon : ({ focused }) => {
                    if (route.name === 'feed-navigation') {
                        return focused ? <HomeIcon height = {25} fill = {colors.main.flatRed}/> 
                        : <HomeIconOutline height = {25} fill = {'black'}/>
                    } else if (route.name === 'qr-scanner') {
                        return <QrIcon/>
                    } else {
                        return focused ? <Menu height = {25} width = {25} fill = {colors.main.flatRed}/>
                        : <MenuOutline height = {25} width = {25} fill = {'black'}/>
                    }
                }
            })}
        >
            <Tabs.Screen name = 'feed-navigation' component = {FeedNavigation}/>
            <Tabs.Screen name = 'qr-scanner' component = {QrScanner}/>
            <Tabs.Screen name = 'setting-navigation' component = {SettingNavigation}/>
        </Tabs.Navigator>
    )
}

export default TabNavigation