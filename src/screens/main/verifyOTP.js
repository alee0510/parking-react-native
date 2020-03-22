import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StatusBar, Vibration } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import LinearGradient from 'react-native-linear-gradient'
import { verifyOTP } from '../../actions'

// import styles
import { colors } from '../../styles'
import { verifyStyles } from '../../styles/main'

class VerifyOTP extends React.Component {
    state = {
        code : ''
    }
    componentDidMount () {
        if(this.props.status) {
            return this.props.navigation.replace('Home')
        }
        Vibration.vibrate(200)
    }

    onInputCode = (code) => {
        this.setState({code}, 
            _ => this.state.code.length >= 4 ? this.onButtonSubmit() : null)
    }

    onButtonSubmit = () => {
        console.log('verify otp')
        this.props.verifyOTP(this.props.id, {
            phone : this.props.phone,
            request_id : this.props.request_id,
            pin : this.state.code
        })
    }

    render () {
        const { code } = this.state
        console.log('error : ', this.props.error)
        console.log(this.props.data)

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

const mapStore = ({ register }) => {
    return {
        loading : register.loading,
        id : register.userId,
        request_id : register.request_id,
        phone : register.phone,
        data : register,
        status : register.verified
    }
}

export default connect(mapStore, { verifyOTP })(VerifyOTP)