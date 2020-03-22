import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, TouchableWithoutFeedback } from 'react-native'
import { RNCamera as Camera } from 'react-native-camera'
import { Icon, Text } from 'react-native-elements'

// import style
import { qrStyles } from '../styles/qrCodeStyles'

// import svg file
import Barcode from '../assets/barcode.svg'

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
            <View style ={qrStyles.container}>
                <TouchableWithoutFeedback onPress = {() => this.props.navigation.goBack()}>
                    <View style = {qrStyles.buttonBack}>
                        <Icon name = 'arrow-back'/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress = {this.handleFlash}>
                    <View style = {qrStyles.flashButton}>
                        <Icon name = {flash ? 'flash-on' : 'flash-off'}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style = {{ height : '73%', overflow : 'hidden'}}>
                    <QRCodeScanner
                        onRead = {this.onSuccess}
                        flashMode = { flash ? Camera.Constants.FlashMode.torch 
                            : Camera.Constants.FlashMode.off}   
                        reactivate = {true}
                        reactivateTimeout = {5000}
                        showMarker
                        customMarker = {() => (
                            <View style = {qrStyles.customMarker}>

                            </View>
                        )}
                    />
                </View>
                <View style = {qrStyles.footer}>
                    <View style = {qrStyles.note}>
                        <Text style = {qrStyles.footerInfo}>
                            Note : 
                        </Text>
                        <Text>
                            Please hold your phone and align to scan qr-code. 
                            If proccess failed, it will automatically scan after 5s.
                        </Text>
                    </View>
                    <View style = {qrStyles.icon}>
                        <Barcode height = {100}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default QrScanner