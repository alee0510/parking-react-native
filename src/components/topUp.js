import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Overlay, Button, Icon } from 'react-native-elements'

// import styles
import { colors, typography } from '../styles'

const TopUp = (props) => {
    const [visible, setVisible] = React.useState(false)
    return (
        <Overlay 
            isVisible = {props.show}
            onBackdropPress = {props.onPress}
            height = {'70%'}
            overlayStyle = {styles.container}
        >
            <View style ={{flex: 1, justifyContent : 'space-between'}}>
                <View>
                    <Input
                        label = 'Top Up Amount'
                        value = {props.amount}
                        containerStyle = {styles.inputContainer}
                        labelStyle = {styles.label}
                        keyboardType = "number-pad"
                        onChangeText = {props.onChangeAmount}
                    />
                    <Input
                        label = 'Password'
                        value = {props.password}
                        containerStyle = {{
                            marginVertical : 10,
                            display : props.passwordInput ? 'flex' : 'none'
                        }}
                        labelStyle = {styles.label}
                        onChangeText = {props.onChangePass}
                        secureTextEntry = {!visible}
                        leftIconContainerStyle = {{marginLeft : 0}}
                        errorMessage = {props.errorMessage}
                        leftIcon={
                            <Icon
                            onPress = { _ => setVisible(!visible)}
                              name={visible ? 'visibility' : 'visibility-off'}
                              size={24}
                              color='black'
                            />
                        }
                    />
                </View>
                <Button
                    title = 'Next'
                    onPress = {props.onPress}
                    loading = {props.loading}
                    buttonStyle = {{
                        backgroundColor : colors.main.flatRed,
                        marginHorizontal : 50,
                        borderRadius : 50,
                    }}
                />
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingVertical : 25,
        borderRadius : 15
    },
    inputContainer : {
        marginVertical : 10,
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    },
})

export default TopUp