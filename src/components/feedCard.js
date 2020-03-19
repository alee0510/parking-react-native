import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

// import styles
import { container, typography, colors } from '../styles'

// import icon

const FeedCard = (props) => {
    return (
        <ImageBackground 
            source = {require('../assets/background/mobile_splash.jpg')} 
            style = {styles.image}
        >
            <View 
                style = {{
                    flex : 1, 
                    backgroundColor : `rgba(52, 52, 52, 0.09)`, 
                    ...container.center
                }}
            >
                <Text style = {styles.saldoStyle}>{`IDR ${props.saldo}`}</Text>
                <Text style = {styles.member}>{props.fullname || 'full name'}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image : {
        flex : 1,
        borderRadius : 15,
        justifyContent : 'center',
    },
    saldoStyle : {
        ...typography.extraBold,
        fontSize : 50,
        color : colors.main.white,
        textAlign : 'center'
    },
    member : {
        ...typography.bold,
        fontSize : 20,
        color : colors.main.white,
        position : 'absolute',
        left : 20,
        bottom : 15,
        textTransform : 'capitalize'
    },
})

export default FeedCard