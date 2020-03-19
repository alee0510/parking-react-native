import React from 'react'
import { View, Text, StyleSheet, StatusBar, Vibration } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import LinearGradient from 'react-native-linear-gradient'

// import styles
import { colors, typography, container} from '../../styles'

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
            <View style = {styles.container}>
                <StatusBar backgroundColor = {'#d73535'} barStyle = 'light-content'/>
                <LinearGradient 
                    colors = {['#ff7171', '#d73535', '#c93636']}
                    useAngle = {true}
                    angle = {135}
                    angleCenter = {{x : 0.1, y : 0}}
                    style = {styles.LinearGradient}
                >
                    <View style = {styles.form}>
                        <Text style = {styles.title}>Verification Code</Text>
                        <Text style = {styles.info}>
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
                    <View style = {styles.virtualKeyboard}>
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

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    LinearGradient : {
        height : '100%',
        width : '100%'
    },
    form : {
        height : '50%',
        ...container.center
    },
    title : {
        fontSize : 24,
        color : colors.neutrals.gray10,
        marginVertical : 20,
        ...typography.bold
    },
    info : {
        fontSize : 16,
        textAlign : 'center',
        ...typography.regular,
        marginHorizontal : '10%',
        marginVertical : 10,
        color : colors.neutrals.gray10,
    },
    virtualKeyboard : {
        height : '50%',
        width : '100%',
        ...container.center,
    }
})

export default VerifyOTP