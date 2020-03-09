import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Setting from '../screens/setting'

// create stack
const Stack = createStackNavigator()

const SettingNavigation = () => {
    return (
        <Stack.Navigator headerMode = 'none' initialRouteName = 'setting'>
            <Stack.Screen name = 'setting' component = {Setting} />
        </Stack.Navigator>
    )
}

export default SettingNavigation