import React from 'react'
import { View, StyleSheet } from 'react-native'

// import style
import { colors, container } from '../styles'

// import svg icon
import QR from '../assets/tab-icons/qr-code-2.svg'

const QrIcon = () => {
    return (
        <View style = {style.container}>
            <View style = {style.icon}>
                <QR height = {40} width ={40} fill = {colors.main.flatRed}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        position : 'absolute',
        alignItems : 'center'
    },
    icon : {
        backgroundColor : colors.main.white ,
        borderWidth : 3,
        borderColor: colors.main.flatRed ,
        alignItems : 'center',
        justifyContent : 'center',
        height : 74,
        width : 74,
        borderRadius : 37,
        position : 'absolute',
        top : -64,
        ...container.depth(2)
    }
})

export default QrIcon