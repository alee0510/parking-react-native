import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import styles
import { colors } from '../styles'

// import navigation
import FeedNavigation from './feedNavigation'
import SettingNavigation from './settingNavigation'
import QrNavigation from './qrNavigation'
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
                    height : 60
                }
            }}
            screenOptions = {({ route }) => ({
                tabBarVisible : ['Qr-Navigation', 'Setting-Navigation'].includes(route.name) ? false : true,
                tabBarIcon : ({ focused }) => {
                    if (route.name === 'Feed-Navigation') {
                        return focused ? <HomeIcon height = {25} fill = {colors.main.flatRed}/> 
                        : <HomeIconOutline height = {25} fill = {'black'}/>
                    } else if (route.name === 'Qr-Navigation') {
                        return <QrIcon/>
                    } else {
                        return focused ? <Menu height = {25} width = {25} fill = {colors.main.flatRed}/>
                        : <MenuOutline height = {25} width = {25} fill = {'black'}/>
                    }
                }
            })}
            >
            <Tabs.Screen name = 'Feed-Navigation' component = {FeedNavigation}/>
            <Tabs.Screen name = 'Qr-Navigation' component = {QrNavigation}/>
            <Tabs.Screen name = 'Setting-Navigation' component = {SettingNavigation}/>
        </Tabs.Navigator>
    )
}

export default TabNavigation