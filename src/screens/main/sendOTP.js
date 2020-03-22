import React from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    StatusBar, 
    TouchableWithoutFeedback,
    ActivityIndicator,
    Vibration 
} from 'react-native'
import { Input, Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { sendOTP } from '../../actions'

// import styles
import { colors, container } from '../../styles'
import { sendStyles } from '../../styles/main'

// import assets
import SmartPhone from '../../assets/message-on-phone.svg'

class SendOTP extends React.Component {
    state = {
        phone : 0
    }

    onButtonSend = () => {
        this.props.sendOTP(`+62${this.state.phone}`)
        if(!this.props.error){
            return this.props.navigation.replace('Verify-OTP')
        }
        Vibration.vibrate(200)
    }

    render () {
        const { phone } = this.state
        // const { navigation } = this.props
        return (
            <View style = {sendStyles.container}>
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
                <View style = {sendStyles.form}>
                    <Input
                        value = {phone}
                        disabled = {false}
                        labelStyle = {sendStyles.label}
                        containerStyle = {{...container.depth(4)}}
                        inputContainerStyle = {sendStyles.inputContainerStyle}
                        inputStyle = {{marginLeft : 5}}
                        keyboardType = 'number-pad'
                        onChangeText = { value => this.setState({ phone : value })}
                        leftIcon={
                            <Text>+62</Text>
                        }
                    />
                    <Text style = {sendStyles.info}>
                        We will send you One Time Password via SMS message. 
                        Carrier rates may apply.
                    </Text>
                    <TouchableWithoutFeedback onPress = {this.onButtonSend}>
                        <View style = {sendStyles.buttonNext}>
                            {
                                this.props.loading ? 
                                <ActivityIndicator size = {25} color = {colors.main.white} />
                                :
                                <Icon name = 'navigate-next' size = {25} color = {colors.main.white}/>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const mapStore = ({register}) => {
    return {
        loading : register.loading,
        error : register.error
    }
}

export default connect(mapStore, { sendOTP })(SendOTP)