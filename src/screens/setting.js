import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

// import styles
import { colors } from '../styles'

class Setting extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Header/>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.neutrals.gray10
    }
})

export default Setting