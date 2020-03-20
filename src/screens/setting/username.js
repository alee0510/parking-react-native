import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

// import component
import Header from '../../components/header'

// import style
import { usernameStyles } from '../../styles/setting'

class Username extends React.Component {
    state = {
        iconEdit : 0,
        username : ''
    }

    render () {
        const { iconEdit } = this.state
        const { navigation } = this.props
        return (
            <View style = {usernameStyles.container}>
                <Header
                    title = 'Username'
                    edit = { iconEdit }
                    handleEdit = {}
                    handleBack = { _ => iconEdit ? this.setState({ iconEdit : iconEdit ? 0 : 1 }) : navigation.goBack()}
                />
                <View style = {usernameStyles.input}>
                    <Input
                        label = 'username'
                        value = { iconEdit ? username : this.props.username }
                        disabled = {false}
                        containerStyle = {usernameStyles.inputContainer}
                        labelStyle = {usernameStyles.label}
                        onChangeText = { value => this.setState({ username : value })}
                    />
                </View>
            </View>
        )
    }
}
const mapStore = ({ user }) => {
    return {
        username : user.account.username,
        loading : user.loading
    }
}

export default connect(mapStore)(Username)
