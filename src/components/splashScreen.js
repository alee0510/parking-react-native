import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import style
import { colors, container, typography } from '../styles'

// import Logo
import Logo from '../assets/parking_app.svg'

const SplashScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.logo}>
                <Logo height = {160}/>
            </View>
            <Text style = {styles.motto}>Make your Life Easy not Lazy.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        ...container.center
    },
    logo : {
        width : 150,
        height : 150,
    },
    motto : {
        fontSize : 14,
        ...typography.semiBold,
        marginTop : 5,
        position : 'absolute',
        bottom : '3%',
        color : colors.neutrals.gray220
    }
})

export default SplashScreen