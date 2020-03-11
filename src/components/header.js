import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

// import styles
import { colors, container } from '../styles'

const Header = () => {
    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
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
                Profile
            </Text>
            <Button
                icon={{
                    name: props.edit ? 'check' : 'edit',
                    size: 30,
                    color: 'black'
                }}
                buttonStyle = {{
                            backgroundColor : 'none'
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