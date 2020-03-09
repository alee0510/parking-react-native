import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { RNCamera as Camera } from 'react-native-camera'
import { Icon} from 'react-native-elements'

import { colors, container } from '../styles'

class QrScanner extends React.Component {
    state = {
        flash : 0
    }

    onSuccess = (e) => {
        console.log(e.data)
    }

    handleFlash = () => {
        this.setState({ flash : this.state.flash ? 0 : 1})
    }

    render () {
        const { flash } = this.state
        return (
            <View style ={{ flex : 1, backgroundColor : colors.main.white}}>
                <TouchableWithoutFeedback onPress = {() => this.props.navigation.goBack()}>
                    <View style = {styles.buttonBack}>
                        <Icon name = 'arrow-back'/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress = {this.handleFlash}>
                    <View style = {styles.flashButton}>
                        <Icon name = {flash ? 'flash-on' : 'flash-off'}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style = {{ height : '75%', overflow : 'hidden'}}>
                    <QRCodeScanner
                        onRead = {this.onSuccess}
                        flashMode = { flash ? Camera.Constants.FlashMode.torch 
                            : Camera.Constants.FlashMode.off}   
                        reactivate = {true}
                        reactivateTimeout = {5000}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonBack : {
        height : 40,
        width : 40,
        backgroundColor : colors.main.white,
        borderRadius : 20,
        ...container.center,
        position : 'absolute',
        top : 15, left : 15,
        zIndex : 5
    },
    flashButton : {
        height : 40,
        width : 40,
        borderRadius : 20,
        backgroundColor : colors.main.white,
        ...container.center,
        position : 'absolute',
        top : 15,
        right : 15,
        zIndex : 5
    }
})

export default QrScanner