import React from 'react'
import { connect } from 'react-redux'
import { StackActions } from '@react-navigation/native'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'

// import custom icon
import Logo from '../../assets/parking_app.svg'

// import component
import SplashScreen from '../../components/splashScreen'

// import action
import { LogIn, CheckLogin } from '../../actions'

// import styles
import { typography } from '../../styles'
import { loginStyles } from '../../styles/main'

class Login extends React.Component {
    state = {
        visible : true,
        username : '',
        password : ''
    }

    componentDidMount () {
        // check login
        this.props.CheckLogin()
    }

    componentDidUpdate () {
        // redirect to home if user login success.
        if (this.props.account) {
            this.props.navigation.navigate('Home')
        }
    }

    onButtonLogin = () => {
        if (this.state.username === '' || this.state.password === '') return null
        this.props.LogIn({
            username : this.state.username,
            password : this.state.password
        })
    }

    render () {
        const { visible, username, password } = this.state
        const { navigation } = this.props

        // display splash screen
        if (this.props.check) {
            return <SplashScreen/>
        }

        return (
            <View style = {loginStyles.container}>
                <View style = {{marginVertical : 20}}>
                    <Logo width = {95} height = {95}/>
                </View>
                <View style = {loginStyles.form}>
                    <Input
                        label = 'Username'
                        value = {username}
                        disabled = {false}
                        labelStyle = {loginStyles.label}
                        containerStyle = {loginStyles.inputContainer}
                        inputContainerStyle = {loginStyles.inputContainerStyle}
                        inputStyle = {loginStyles.inputStyle}
                        onChangeText = { value => this.setState({ username : value })}
                        leftIcon={
                            <Icon name='account-circle' size={24} color='black'/>
                        }
                    />
                    <Input
                        label = 'Password'
                        value = {password}
                        disabled = {false}
                        labelStyle = {loginStyles.label}
                        containerStyle = {loginStyles.inputContainer}
                        inputContainerStyle = {loginStyles.inputContainerStyle}
                        inputStyle = {loginStyles.inputStyle}
                        onChangeText = { value => this.setState({password : value })}
                        secureTextEntry = {visible}
                        errorMessage = {this.props.error}
                        errorStyle = {{marginVertical : 10}}
                        leftIcon = {
                            <TouchableWithoutFeedback 
                                onPress = { _ => this.setState({ visible : !visible})}
                            >
                                <Icon
                                  name = {visible ? 'visibility-off' : 'visibility'}
                                  size={24} color='black'
                                />
                            </TouchableWithoutFeedback>
                                
                        }
                    />
                    <Button 
                        title = 'Login' 
                        containerStyle = {loginStyles.button}
                        buttonStyle = {loginStyles.buttonStyle}
                        titleStyle = {{ fontSize : 20, ...typography.bold}}
                        onPress = {this.onButtonLogin}
                        loading = {this.props.loading}
                    />
                    <Text style = {loginStyles.textOr}>OR</Text>
                    <TouchableWithoutFeedback onPress = { _ => navigation.navigate('Register')}>
                        <Text style = {loginStyles.textRegister}>
                            Create your new account ?
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        error : user.error,
        account : user.account,
        loading : user.loading,
        check : user.check
    }
}

const mapDispatch = () => {
    return {
        LogIn,
        CheckLogin
    }
}

export default connect(mapStore, mapDispatch())(Login)