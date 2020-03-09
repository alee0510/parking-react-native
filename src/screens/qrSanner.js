import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class QrScanner extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {{ fontSize : 24 }}>QrScanner</Text>
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

export default QrScanner