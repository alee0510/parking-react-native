import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'

// import custom icon
import Logo from '../../assets/parking_app.svg'

// import styles
import { colors, typography, container } from '../../styles'

class Login extends React.Component {
    state = {
        visible : false
    }
    render () {
        const { visible } = this.state
        const { navigation } = this.props
        return (
            <View style = {styles.container}>
                <View style = {styles.logo}>
                    <Logo width = {95} height = {95}/>
                </View>
                <View style = {styles.form}>
                    <Input
                        label = 'Username'
                        // value = {'alee0510'}
                        disabled = {false}
                        labelStyle = {styles.label}
                        containerStyle = {styles.inputContainer}
                        inputContainerStyle = {styles.inputContainerStyle}
                        inputStyle = {styles.inputStyle}
                        leftIcon={
                            <Icon name='account-circle' size={24} color='black'/>
                        }
                    />
                    <Input
                        label = 'Password'
                        // value = {'alee0510'}
                        disabled = {false}
                        labelStyle = {styles.label}
                        containerStyle = {styles.inputContainer}
                        inputContainerStyle = {styles.inputContainerStyle}
                        inputStyle = {styles.inputStyle}
                        leftIcon = {
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
                        title = 'Login' 
                        containerStyle = {styles.button}
                        buttonStyle = {styles.buttonStyle}
                        titleStyle = {{ fontSize : 20, ...typography.bold}}
                    />
                    <Text style = {styles.textOr}>OR</Text>
                    <TouchableWithoutFeedback onPress = { _ => navigation.navigate('register')}>
                        <Text style = {styles.textRegister}>
                            Create your new account ?
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        ...container.center,
        backgroundColor : colors.neutrals.gray20
    },
    logo : {
        marginVertical : 20
    },
    form : {
        // backgroundColor : 'pink',
        height : '50%',
        width : '80%'
    },
    inputContainer : {
        ...container.depth(4),
        // backgroundColor : 'red'
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4)
    },
    inputStyle : {
        // backgroundColor : 'yellow',
        marginLeft : 5
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 10
    },
    button : {
        marginTop : '20%',
        marginHorizontal : 10
    },
    buttonStyle : {
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
        // fontSize : 20
    },
    textOr : {
        fontSize : 14, 
        ...typography.regular,
        marginVertical : 15,
        textAlign : 'center'
    },
    textRegister : {
        fontSize : 14,
        ...typography.semiBold,
        textAlign : 'center',
        color : colors.main.blue
    }
})

export default Login