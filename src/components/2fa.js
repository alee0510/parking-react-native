import React from 'react'
import { View, Text } from 'react-native'
import FingerprintScanner from 'react-native-fingerprint-scanner'

class FingerPrint extends React.Component {
    async componentDidMount () {
        // check hardware availability
        try {
            const biometricType = await FingerprintScanner.isSensorAvailable()
            console.log(biometricType)
            if (biometricType) {
                this.scanFingerPrint()
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    componentWillUnmount () {
        // Stops fingerprint scanner listener, 
        // releases cache of internal state in native code, 
        // and cancels native prompt if visible.
        FingerprintScanner.release()
    }

    scanFingerPrint = async () => {
        try {
            const response = await FingerprintScanner.authenticate({ 
                description : 'Scanning', 
                onAttempt : () => console.log('error')
            })
            console.log(response) // response : return boolean
        } catch (err) {
            console.log(err.message)
        }
    }
    render () {
        return (
            <View style = {{flex : 1}}>
                <Text>Auth</Text>
            </View>
        )
    }
}

export default FingerPrint