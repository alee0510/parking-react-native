import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

// import component
import Header from '../../components/header'

// import style
import { colors, typography, container } from '../../styles'

const Password = ({ navigation }) => {
    const [edit, setEdit] = React.useState(0)
    const [visible, setVisible] = React.useState(false)

    return (
        <View style = {styles.container}>
            <Header
                title = 'Password'
                edit = {edit}
                handleEdit = { _ => setEdit(edit ? 0 : 1)}
                handleBack = { _ => navigation.goBack()}
            />
            <View style = {styles.input}>
                <Input
                    label = 'old password'
                    // value = {'alee0510'}
                    disabled = {false}
                    containerStyle = {styles.inputContainer}
                    leftIconContainerStyle = {{paddingRight : 10}}
                    labelStyle = {styles.label}
                    secureTextEntry = {!visible}
                    placeholder = 'input your password'
                    leftIcon={
                        <Icon 
                            name = {visible ? 'visibility' : 'visibility-off'}
                            onPress = { _ => setVisible(!visible)}
                        />
                    }
                />
                <Input
                    label = 'new password'
                    // value = {''}
                    disabled = {false}
                    containerStyle = {styles.inputContainer}
                    leftIconContainerStyle = {{paddingRight : 10}}
                    labelStyle = {styles.label}
                    secureTextEntry = {!visible}
                    leftIcon={
                        <Icon 
                            name = {visible ? 'visibility' : 'visibility-off'}
                            onPress = { _ => setVisible(!visible)}
                        />
                    }
                />
                <Input
                    label = 'confirm new password'
                    // value = {''}
                    disabled = {false}
                    containerStyle = {styles.inputContainer}
                    leftIconContainerStyle = {{paddingRight : 10}}
                    labelStyle = {styles.label}
                    secureTextEntry = {!visible}
                    leftIcon={
                        <Icon 
                            name = {visible ? 'visibility' : 'visibility-off'}
                            onPress = { _ => setVisible(!visible)}
                        />
                    }
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
    headerTitle : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : colors.main.white,
        alignItems : 'center',
        ...container.depth(5)
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

export default Password
