import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Register extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {{ fontSize : 24 }}>Register</Text>
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

export default Register