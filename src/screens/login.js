import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

class Login extends React.Component {
    state = {
        visible : false
    }
    render () {
        const { visible } = this.state
        return (
            <View style = {styles.container}>
                <Text style = {{ fontSize : 24 }}>Sign In</Text>
                <View style = {styles.form}>
                </View>
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

export default Login