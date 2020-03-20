import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { editUsername } from '../../actions'

// import component
import Header from '../../components/header'

// import style
import { usernameStyles } from '../../styles/setting'

class Username extends React.Component {
    state = {
        iconEdit : 0,
        disableInput : true,
        username : ''
    }

    onButtonEdit = () => {
        const { iconEdit, disableInput } = this.state
        // initialize edit
        if (!iconEdit) {
            return this.setState({
                username : this.props.username,
                iconEdit : 1,
                disableInput : false
            })
        }
        this.setState({
            iconEdit : 0,
            disableInput : true
        },
        _ => {
            console.log(this.state.username)
            console.log('do request edit username')
            this.props.editUsername(this.state.username)
        }
        )

    }

    onButtonCancel = () => {
        this.setState({
            iconEdit : 0,
            disableInput : true
        })
    }

    render () {
        const { iconEdit, disableInput, username } = this.state
        const { navigation } = this.props
        return (
            <View style = {usernameStyles.container}>
                <Header
                    title = 'Username'
                    edit = { iconEdit }
                    handleEdit = {this.onButtonEdit}
                    handleBack = { _ => iconEdit ? this.onButtonCancel() : navigation.goBack()}
                    loading = {this.props.loading}
                />
                <View style = {usernameStyles.input}>
                    <Input
                        label = 'Username'
                        value = { iconEdit ? username : this.props.username }
                        disabled = {disableInput}
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

export default connect(mapStore, { editUsername })(Username)
