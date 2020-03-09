import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { RNCamera as Camera } from 'react-native-camera'
import { Icon, Text } from 'react-native-elements'

// import style
import { colors, container, typography } from '../styles'

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
                        showMarker
                        customMarker = {() => (
                            <View style = {{ height : 300, width : 300, borderWidth : 2.5, borderColor : colors.main.flatRed}}>

                            </View>
                        )}
                    />
                </View>
                <View style = {styles.footer}>
                    <View style = {{ height : '100%', width : 20, borderBottomWidth : 1, borderLeftColor : 'black'}}></View>
                    <View style = {styles.note}>
                        <Text style = {{ fontSize : 16, ...typography.bold, paddingBottom : 5 }}>Note : </Text>
                        <Text>
                            Please hold your phone and align to scan qr-code. 
                            If proccess failed, it will automatically scan after 5s.
                        </Text>
                    </View>
                    <View style = {styles.icon}>
                        <Barcode height = {100}/>
                    </View>
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
    },
    footer : {
        flex : 1,
        flexDirection : 'row',
        zIndex : 5
    },
    note : {
        width : '50%', height : '100%',
        // backgroundColor : 'pink',
        paddingHorizontal : 20,
        paddingVertical : 25,
    },
    icon : {
        width : '50%', height : '100%',
        // backgroundColor : 'yellow',
        padding : '10%'
    }
})

export default QrScanner