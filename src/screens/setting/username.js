import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

// import component
import Header from '../../components/header'

// import style
import { usernameStyles } from '../../styles/setting'

const Username = ({ navigation }) => {
    const [edit, setEdit] = React.useState(0)
    return (
        <View style = {usernameStyles.container}>
            <Header
                title = 'Username'
                edit = {edit}
                handleEdit = { _ => setEdit(edit ? 0 : 1)}
                handleBack = { _ => navigation.goBack()}
            />
            <View style = {usernameStyles.input}>
                <Input
                    label = 'username'
                    value = {'alee0510'}
                    disabled = {false}
                    containerStyle = {usernameStyles.inputContainer}
                    labelStyle = {usernameStyles.label}
                />
            </View>
        </View>
    )
}

const mapStore = ({ user }) => {
    return {
        username : user.account.username
    }
}



export default connect(mapStore)(Username)
