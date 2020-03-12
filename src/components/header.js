import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'

// import styles
import { colors, container, typography } from '../styles'

const Header = (props) => {
    return (
        <View style = {{
            flexDirection : 'row',
            paddingHorizontal : 20,
            paddingVertical : 15,
            backgroundColor : props.background || colors.main.white,
            alignItems : 'center',
            ...container.depth(5)
        }}
        >
            <TouchableWithoutFeedback onPress = {props.handleBack}>
                <View>
                    <Icon name = 'arrow-back' size = {30} color = { props.fontColor || 'white'}/>
                </View>
            </TouchableWithoutFeedback>
            <Text 
                style = {{
                    ...typography.bold, 
                    fontSize : 28, 
                    marginLeft : 10,
                    flex : 1,
                    color : props.fontColor || colors.neutrals.gray220
                }}
            >
                {props.title}
            </Text>
            <Button
                icon={{
                    name: props.edit ? 'check' : 'edit',
                    size: 30,
                    color: props.fontColor || 'black'
                }}
                buttonStyle = {{
                    backgroundColor : 'transparent'
                }}
                loading = {props.loading}
                onPress = {props.handleEdit}
            />
        </View>
    )
}

export default Header