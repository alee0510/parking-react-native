import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'

// import styles
import { colors, container, typography } from '../styles'

class Notification extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                {/* HEADER */}
                <View style = {{
                    flexDirection : 'row',
                    paddingHorizontal : 20,
                    paddingVertical : 15,
                    backgroundColor : colors.main.white,
                    alignItems : 'center',
                    ...container.depth(5)
                }}
                >
                    <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
                        <View>
                            <Icon name = 'arrow-back' size = {30} color = 'black'/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text 
                        style = {{
                            ...typography.bold, 
                            fontSize : 28, 
                            marginLeft : 10,
                            flex : 1,
                            color : colors.neutrals.gray220
                        }}
                    >
                        Notification
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

export default Notification