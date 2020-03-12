import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Overlay, Button } from 'react-native-elements'

// import styles
import { colors, typography } from '../styles'

const TopUp = (props) => {
    return (
        <Overlay 
            isVisible = {props.show}
            onBackdropPress = {props.onPress}
            height = {'70%'}
            overlayStyle = {styles.container}
        >
            <Input
                label = 'Top Up Amount'
                disabled = {false}
                containerStyle = {styles.inputContainer}
                labelStyle = {styles.label}
                keyboardType = "number-pad"
            />
            <Button
                title = 'Next'
                buttonStyle = {{
                    backgroundColor : colors.main.flatRed,
                    marginHorizontal : 50,
                    borderRadius : 50,
                }}
            />
        </Overlay>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-between',
        paddingVertical : 25
    },
    inputContainer : {
        marginVertical : 10
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    },
})

export default TopUp