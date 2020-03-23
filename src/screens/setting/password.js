import React from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Input } from 'react-native-elements'
import { editPassword } from '../../actions'

// import component
import Header from '../../components/header'

// import style
import { passwordStyles } from '../../styles/setting'

class Password extends React.Component {
    state = {
        visible : false,
        oldPassword : '',
        newPassword : '',
        confirmPassword : ''
    }

    onButtonCheck = () => {
        if (this.state.oldPassword === '') return null
        if (this.state.newPassword !== this.state.confirmPassword) {
            return Alert.alert('password doesn\'t match.')
        }
        this.props.editPassword({
            oldPassword : this.state.oldPassword,
            newPassword : this.state.newPassword
        })
    }

    render () {
        const { visible, oldPassword, newPassword, confirmPassword } = this.state
        const { navigation } = this.props
        console.log('error : ', this.props.error)
        return (
            <View style = {passwordStyles.container}>
                <Header
                    title = 'Edit Password'
                    edit = {1}
                    handleEdit = {this.onButtonCheck}
                    loading = {this.props.loading}
                    handleBack = { _ => navigation.goBack()}
                />
                <View style = {passwordStyles.input}>
                    <Input
                        label = 'old password'
                        value = {oldPassword}
                        containerStyle = {passwordStyles.inputContainer}
                        leftIconContainerStyle = {passwordStyles.iconContainer}
                        labelStyle = {passwordStyles.label}
                        secureTextEntry = {!visible}
                        onChangeText = {value => this.setState({ oldPassword : value })}
                        leftIcon={
                            <Icon 
                                name = {visible ? 'visibility' : 'visibility-off'}
                                onPress = { _ => this.setState({ visible : !visible})}
                            />
                        }
                    />
                    <Input
                        label = 'new password'
                        value = {newPassword}
                        containerStyle = {passwordStyles.inputContainer}
                        leftIconContainerStyle = {passwordStyles.iconContainer}
                        labelStyle = {passwordStyles.label}
                        secureTextEntry = {!visible}
                        onChangeText = {value => this.setState({ newPassword : value })}
                        leftIcon={
                            <Icon 
                                name = {visible ? 'visibility' : 'visibility-off'}
                                onPress = { _ => this.setState({ visible : !visible})}
                            />
                        }
                    />
                    <Input
                        label = 'confirm new password'
                        value = {confirmPassword}
                        containerStyle = {passwordStyles.inputContainer}
                        leftIconContainerStyle = {passwordStyles.iconContainer}
                        labelStyle = {passwordStyles.label}
                        secureTextEntry = {!visible}
                        errorMessage = {this.props.error}
                        errorStyle = {{marginVertical : 10}}
                        onChangeText = {value => this.setState({ confirmPassword : value })}
                        leftIcon={
                            <Icon 
                                name = {visible ? 'visibility' : 'visibility-off'}
                                onPress = { _ => this.setState({ visible : !visible})}
                            />
                        }
                    />
                </View>
            </View>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        error : user.error,
        loading : user.loading
    }
}

export default connect(mapStore, { editPassword })(Password)
