import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'

// import styles
import { typography, container, colors } from '../styles'

class Register extends React.Component {
    state = {
        visible : false
    }
    render () {
        const { visible } = this.state
        const { navigation } = this.state
        return (
            <View style = {styles.container}>
                <ScrollView style = {{paddingVertical : '10%', width : '85%'}}>
                    <View style = {{ width : '80%', marginVertical : 18, marginHorizontal : 10}}>
                        <Text style = {styles.title}>
                            Create your Parking Account
                        </Text>
                    </View>
                    <View style = {styles.form}>
                        <Input
                            label = 'Full name'
                            // value = {'alee0510'}
                            disabled = {false}
                            labelStyle = {styles.label}
                            containerStyle = {styles.inputContainer}
                            inputContainerStyle = {styles.inputContainerStyle}
                            inputStyle = {styles.inputStyle}
                            leftIcon={
                                <Icon name='face-profile' type = 'material-community'
                                size={24} color='black'
                                />
                            }
                        />
                        <Input
                            label = 'Username'
                            // value = {'alee0510'}
                            disabled = {false}
                            labelStyle = {styles.label}
                            containerStyle = {styles.inputContainer}
                            inputContainerStyle = {styles.inputContainerStyle}
                            inputStyle = {styles.inputStyle}
                            leftIcon={ <Icon name='account-circle' size={24} color='black'/> }
                        />
                        <Input
                            label = 'Email'
                            // value = {'alee0510'}
                            disabled = {false}
                            labelStyle = {styles.label}
                            containerStyle = {styles.inputContainer}
                            inputContainerStyle = {styles.inputContainerStyle}
                            inputStyle = {styles.inputStyle}
                            leftIcon={ <Icon name='email' size={24} color='black'/> }
                        />
                        <Input
                            label = 'Password'
                            // value = {'alee0510'}
                            disabled = {false}
                            labelStyle = {styles.label}
                            containerStyle = {styles.inputContainer}
                            inputContainerStyle = {styles.inputContainerStyle}
                            inputStyle = {styles.inputStyle}
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
                            // value = {'alee0510'}
                            disabled = {false}
                            labelStyle = {styles.label}
                            containerStyle = {styles.inputContainer}
                            inputContainerStyle = {styles.inputContainerStyle}
                            inputStyle = {styles.inputStyle}
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
                            containerStyle = {styles.button}
                            buttonStyle = {styles.buttonStyle}
                            titleStyle = {{ fontSize : 20, ...typography.bold}}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray20,
        alignItems : 'center'
    },
    title : {
        fontSize : 32,
        ...typography.bold,
        color : colors.neutrals.gray220
    },
    inputContainer : {
        ...container.depth(4),
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4),
        marginVertical : 8
    },
    inputStyle : {
        marginLeft : 5
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 2
    },
    button : {
        marginTop : '8%',
        marginHorizontal : '10%'
    },
    buttonStyle : {
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
        fontSize : 20
    },
})

export default Register