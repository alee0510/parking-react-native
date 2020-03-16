import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

// import styles
import { colors, typography, container } from '../styles'

// import assets
import SmartPhone from '../assets/message-on-phone.svg'

class SendOTP extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <StatusBar backgroundColor = {'#d73535'} barStyle = 'light-content'/>
                <View style = {{ flex : 1.6 }}>
                    <LinearGradient 
                        colors = {['#ff7171', '#d73535', '#c93636']}
                        useAngle = {true}
                        angle = {135}
                        angleCenter = {{x : 0.1, y : 0}}
                        style = {{flex : 1, justifyContent : 'center'}}
                    >
                        <SmartPhone height = {110} fill = {colors.main.white}/>
                    </LinearGradient>
                </View>
                <View style = {styles.form}>
                    <Input
                        // value = {'alee0510'}
                        disabled = {false}
                        labelStyle = {styles.label}
                        containerStyle = {{...container.depth(4)}}
                        inputContainerStyle = {styles.inputContainerStyle}
                        inputStyle = {{marginLeft : 5}}
                        keyboardType = 'number-pad'
                        leftIcon={
                            <Text>+62</Text>
                        }
                    />
                    <Text style = {styles.info}>
                        We will send you One Time Password via SMS message. 
                        Carrier rates may apply.
                    </Text>
                    <View style = {styles.buttonNext}>
                        <Icon name = 'navigate-next' size = {25} color = {colors.main.white}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    form : {
        flex : 1,
        backgroundColor : colors.neutrals.gary20,
        paddingHorizontal : '10%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4)
    },
    buttonNext : {
        height : 50, width : 50,
        backgroundColor : colors.main.flatRed,
        borderRadius : 25,
        ...container.center,
        ...container.depth(2)
    },
    info : {
        textAlign : 'center', 
        marginVertical : 23,
        marginHorizontal : 30,
        fontSize : 13,
        ...typography.regular
    }
})

export default SendOTP