import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

// import component
import Header from '../../components/header'

// import style
import { colors, typography, container } from '../../styles'

const Username = ({ navigation }) => {
    const [edit, setEdit] = React.useState(0)
    return (
        <View style = {styles.container}>
            <Header
                title = 'Username'
                edit = {edit}
                handleEdit = { _ => setEdit(edit ? 0 : 1)}
                handleBack = { _ => navigation.goBack()}
            />
            <View style = {styles.input}>
                <Input
                    label = 'username'
                    value = {'alee0510'}
                    disabled = {false}
                    containerStyle = {styles.inputContainer}
                    labelStyle = {styles.label}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10
    },
    input : {
        paddingHorizontal : 30,
        marginTop : 20
    },
    inputContainer : {
        marginVertical : 10
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    }
})

export default Username
