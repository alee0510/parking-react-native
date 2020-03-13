import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Overlay, Rating, Button } from 'react-native-elements'

// import styles
import { colors, container } from '../styles'

const Ratings = (props) => {
    return (
        <Overlay
            isVisible = {props.show}
            onBackdropPress = {props.onPress}
            height = {'70%'}
            overlayStyle = {styles.container}
        >
            <Rating
                type = 'heart'
                showRating
                onFinishRating = { rating => console.log('rating : ' + rating)}
            />
            <TextInput 
                multiline 
                style = {styles.textArea}
            />
            <View style = {{ position : 'absolute', bottom : '5%'}}>
                <Button 
                    title = 'Submit' 
                    buttonStyle = {{
                        backgroundColor : colors.main.flatRed,
                        width : 150,
                        borderRadius : 50
                    }}
                />
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingVertical : 25,
        paddingHorizontal : 10,
        borderRadius : 15,
        ...container.center,
    },
    textArea : {
        width : '80%',
        borderWidth : 1,
        borderColor : colors.neutrals.gary90,
        marginVertical : 20,
        padding : 20,
        marginTop : 50
    }
})

export default Ratings