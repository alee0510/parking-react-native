import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'

// import styles
import { colors, container, typography } from '../styles'

const Header = (props) => {
    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress = {props.handleBack}>
                <View>
                    <Icon name = 'arrow-back' size = {30}/>
                </View>
            </TouchableWithoutFeedback>
            <Text 
                style = {{
                    ...typography.bold, 
                    fontSize : 28, 
                    marginLeft : 10,
                    flex : 1,
                }}
            >
                {props.title}
            </Text>
            <Button
                icon={{
                    name: props.edit ? 'check' : 'edit',
                    size: 30,
                    color: 'black'
                }}
                buttonStyle = {{
                    backgroundColor : colors.main.white
                }}
                loading = {props.loading}
                onPress = {props.handleEdit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : colors.main.white,
        alignItems : 'center',
        ...container.depth(5)
    }
})

export default Header