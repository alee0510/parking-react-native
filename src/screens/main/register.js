import React from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { register } from '../../actions'

// import styles
import { typography } from '../../styles'
import { registerStyles } from '../../styles/main'

class Register extends React.Component {
    state = {
        visible : false,
        fullname : '',
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    componentDidUpdate() {
        console.log('did update')
        if(this.props.status) {
            this.props.navigation.replace('Add-Vehicle')
        }
    }

    onButtonRegister = () => {
        const { fullname, username, email, password, confirmPassword } = this.state
        if (password === '' & confirmPassword === '') return null
        if (password !== confirmPassword) return Alert.alert('password doesn\'t match.')
        this.props.register({
            fullname, username, email, password
        })
    }

    render () {
        const { visible, fullname, username, email, password, confirmPassword } = this.state
        console.log(this.props.status)
        // const { navigation } = this.props
        return (
            <View style = {registerStyles.container}>
                <ScrollView style = {{paddingVertical : '10%', width : '85%'}}>
                    <View style = {{ width : '80%', marginVertical : 18, marginHorizontal : 10}}>
                        <Text style = {registerStyles.title}>
                            Create your Parking Account
                        </Text>
                    </View>
                    <View style = {registerStyles.form}>
                        <Input
                            label = 'Full name'
                            value = {fullname}
                            disabled = {false}
                            labelStyle = {registerStyles.label}
                            containerStyle = {registerStyles.inputContainer}
                            inputContainerStyle = {registerStyles.inputContainerStyle}
                            inputStyle = {registerStyles.inputStyle}
                            onChangeText = { value => this.setState({ fullname : value })}
                            leftIcon={
                                <Icon name='face-profile' type = 'material-community'
                                size={24} color='black'
                                />
                            }
                        />
                        <Input
                            label = 'Username'
                            value = {username}
                            disabled = {false}
                            labelStyle = {registerStyles.label}
                            containerStyle = {registerStyles.inputContainer}
                            inputContainerStyle = {registerStyles.inputContainerStyle}
                            inputStyle = {registerStyles.inputStyle}
                            leftIcon={ <Icon name='account-circle' size={24} color='black'/> }
                            onChangeText = { value => this.setState({ username : value })}
                        />
                        <Input
                            label = 'Email'
                            value = {email}
                            disabled = {false}
                            labelStyle = {registerStyles.label}
                            containerStyle = {registerStyles.inputContainer}
                            inputContainerStyle = {registerStyles.inputContainerStyle}
                            inputStyle = {registerStyles.inputStyle}
                            leftIcon={ <Icon name='email' size={24} color='black'/> }
                            onChangeText = { value => this.setState({ email : value })}
                        />
                        <Input
                            label = 'Password'
                            value = {password}
                            disabled = {false}
                            labelStyle = {registerStyles.label}
                            containerStyle = {registerStyles.inputContainer}
                            inputContainerStyle = {registerStyles.inputContainerStyle}
                            inputStyle = {registerStyles.inputStyle}
                            secureTextEntry = {!visible}
                            onChangeText = { value => this.setState({ password : value })}
                            leftIcon={
                                <TouchableWithoutFeedback 
                                    onPress = { _ => this.setState({ visible : !visible})}
                                >
                                    <Icon
                                    name = {visible ? 'visibility' : 'visibility-off'}
                                    size={24} color='black'
                                    />
                                </TouchableWithoutFeedback>
                            }
                        />
                        <Input
                            value = {confirmPassword}
                            disabled = {false}
                            labelStyle = {registerStyles.label}
                            containerStyle = {registerStyles.inputContainer}
                            inputContainerStyle = {registerStyles.inputContainerStyle}
                            inputStyle = {registerStyles.inputStyle}
                            secureTextEntry = {!visible}
                            onChangeText = { value => this.setState({ confirmPassword : value })}
                            errorMessage = {this.props.error}
                            leftIcon={
                                <TouchableWithoutFeedback 
                                    onPress = { _ => this.setState({ visible : !visible})}
                                >
                                    <Icon
                                    name = {visible ? 'visibility' : 'visibility-off'}
                                    size={24} color='black'
                                    />
                                </TouchableWithoutFeedback>
                            }
                        />
                        <Button 
                            title = 'Register' 
                            containerStyle = {registerStyles.button}
                            buttonStyle = {registerStyles.buttonStyle}
                            titleStyle = {{ fontSize : 20, ...typography.bold}}
                            onPress = {this.onButtonRegister}
                            loading = {this.props.loading}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapStore = ({ register }) => {
    return {
        loading : register.loading,
        error : register.error,
        status : register.registerStatus
    }
}


export default connect(mapStore, { register })(Register)