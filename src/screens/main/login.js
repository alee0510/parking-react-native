import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'

// import custom icon
import Logo from '../../assets/parking_app.svg'

// import action
import { LogIn } from '../../actions'

// import styles
import { typography } from '../../styles'
import { loginStyles } from '../../styles/feed'

class Login extends React.Component {
    state = {
        visible : true,
        username : '',
        password : ''
    }
    componentDidUpdate () {
        // redirect to home if user login success.
        if (this.props.account) {
            this.props.navigation.navigate('Home', {screen : 'Feed'})
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

        return (
            <View style = {loginStyles.styles.container}>
                <View style = {{marginVertical : 20}}>
                    <Logo width = {95} height = {95}/>
                </View>
                <View style = {loginStyles.styles.form}>
                    <Input
                        label = 'Username'
                        value = {username}
                        disabled = {false}
                        labelStyle = {loginStyles.styles.label}
                        containerStyle = {loginStyles.styles.inputContainer}
                        inputContainerStyle = {loginStyles.styles.inputContainerStyle}
                        inputStyle = {loginStyles.styles.inputStyle}
                        onChangeText = { value => this.setState({ username : value })}
                        leftIcon={
                            <Icon name='account-circle' size={24} color='black'/>
                        }
                    />
                    <Input
                        label = 'Password'
                        value = {password}
                        disabled = {false}
                        labelStyle = {loginStyles.styles.label}
                        containerStyle = {loginStyles.styles.inputContainer}
                        inputContainerStyle = {loginStyles.styles.inputContainerStyle}
                        inputStyle = {loginStyles.styles.inputStyle}
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
                        containerStyle = {loginStyles.styles.button}
                        buttonStyle = {loginStyles.styles.buttonStyle}
                        titleStyle = {{ fontSize : 20, ...typography.bold}}
                        onPress = {this.onButtonLogin}
                        loading = {this.props.loading}
                    />
                    <Text style = {loginStyles.styles.textOr}>OR</Text>
                    <TouchableWithoutFeedback onPress = { _ => navigation.navigate('Register')}>
                        <Text style = {loginStyles.styles.textRegister}>
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
        loading : user.loading
    }
}

export default connect(mapStore, { LogIn })(Login)