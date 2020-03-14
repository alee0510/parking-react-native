import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements'

// import styles
import { colors, typography, container } from '../styles'

const GreetScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <ImageBackground 
                    source = {require('../assets/background/splash_edit.jpg')}
                    style = {{ flex : 1}}
                />
            </View>
            <View style = {styles.titleBox}>
                <Text style = {styles.title}>Par</Text>
            </View>
            <View style = {styles.kingBox}>
                <Text style = {styles.text1}>KI</Text>
                <Text style = {styles.text2}>NG</Text>
            </View>
            <TouchableWithoutFeedback onPress = { _ => this.navigation.navigate('logi')}>
                <View style = {styles.next}>
                    <Icon name = 'navigate-next' size = {30} color = {colors.main.white}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.main.white
    },
    imageContainer : {
        height : '100%',
        width : '63%',
        backgroundColor : 'pink',
        overflow : 'hidden'
    },
    titleBox : {
        height : 140,
        width : '63%',
        backgroundColor : colors.main.white,
        position : 'absolute',
        bottom : '17%',
        ...container.center
    },
    title : {
        fontSize : 130,
        ...typography.bold,
        color : colors.main.flatRed
    },
    kingBox : {
        // backgroundColor : 'pink',
        position : 'absolute',
        bottom : '1%',
        right : 0,
        ...container.center,
        flexDirection : 'row',
        paddingRight : '5%'
    },
    text1 : {
        fontSize : 100,
        ...typography.bold,
        color : colors.main.white
    },
    text2 : {
        fontSize : 90,
        ...typography.bold,
        color : colors.main.flatRed
    },
    next : {
        height : 50,
        width : 50,
        backgroundColor : colors.main.flatRed,
        position : 'absolute',
        ...container.center,
        ...container.depth(4),
        borderRadius : 25,
        top : 30, 
        right : 40
    }
})
export default GreetScreen