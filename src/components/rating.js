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
            <View 
                style = {{
                    flex : 1,
                    ...container.center,
                }}>
                <Rating
                    type = 'heart'
                    showRating
                    onFinishRating = {props.onFinishRating}
                />
                <TextInput 
                    multiline
                    value = {props.reviews} 
                    style = {styles.textArea}
                    onChangeText = {props.onChangeText}
                />
                <View style = {{ position : 'absolute', bottom : '3%'}}>
                    <Button 
                        title = 'Submit' 
                        buttonStyle = {{
                            backgroundColor : colors.main.flatRed,
                            width : 150,
                            borderRadius : 50
                        }}
                        onPress = {props.onPress}
                        loading = {props.loading}
                    />
                </View>
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 15,
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