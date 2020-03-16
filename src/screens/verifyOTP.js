import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import styles
import { colors, typography, container} from '../styles'

class VerifyOTP extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text>OTP</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

export default VerifyOTP