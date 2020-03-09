import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { typography } from '../styles'

class Feed extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {{ fontSize : 24, ...typography.bold }}>Feed</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Feed