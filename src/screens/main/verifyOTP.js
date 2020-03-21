import React from 'react'
import { View, Text, StatusBar, Vibration } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import LinearGradient from 'react-native-linear-gradient'

// import styles
import { colors } from '../../styles'
import { verifyStyles } from '../../styles/main'

class VerifyOTP extends React.Component {
    state = {
        code : ''
    }
    
    onInputCode = (code) => {
        this.setState({code}, _ => this.state.code.length >= 4 ? Vibration.vibrate(500) : null)
    }

    render () {
        const { code } = this.state
        return (
            <View style = {verifyStyles.container}>
                <StatusBar backgroundColor = {'#d73535'} barStyle = 'light-content'/>
                <LinearGradient 
                    colors = {['#ff7171', '#d73535', '#c93636']}
                    useAngle = {true}
                    angle = {135}
                    angleCenter = {{x : 0.1, y : 0}}
                    style = {verifyStyles.LinearGradient}
                >
                    <View style = {verifyStyles.form}>
                        <Text style = {verifyStyles.title}>Verification Code</Text>
                        <Text style = {verifyStyles.info}>
                            Please type the verification code sent to +6285946646906
                        </Text>
                        <SmoothPinCodeInput
                            value = { code }
                            cellStyle = {{
                                borderBottomWidth : 2,
                                borderColor : colors.neutrals.gray10,
                            }}
                            cellStyleFocused = {{
                                borderColor: colors.neutrals.gray50
                            }}
                            textStyle = {{ color : colors.neutrals.gray10, fontSize : 16 }}
                        />
                    </View>
                    <View style = {verifyStyles.virtualKeyboard}>
                        <VirtualKeyboard 
                            color = {colors.neutrals.gray10} 
                            pressMode ='string' 
                            onPress = {code => this.onInputCode(code)}
                            cellStyle = {{ paddingVertical : '3%'}}
                        />
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default VerifyOTP