import React from 'react'
import { connect } from 'react-redux'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import { RNCamera as Camera } from 'react-native-camera'
import { Icon, Text, Overlay } from 'react-native-elements'
import { TabActions } from '@react-navigation/native'
import { enterParking, leaveParking, payParking } from '../actions'

// import style
import { qrStyles } from '../styles/qrCodeStyles'
import { colors } from '../styles'

// import svg file
import Barcode from '../assets/barcode.svg'

class QrScanner extends React.Component {
    state = {
        flash : 0
    }

    onSuccess = (e) => {
        if (this.props.token) {
            console.log('leave parking')
            this.props.navigation.navigate('Payment', { url : e.data })
            return 
        }
        console.log('enter parking')
        this.props.enterParking(e.data, this.props.account.id, this.props.vehicle.vehicle_type)
        this.props.navigation.dispatch(TabActions.jumpTo('Feed-Navigation'))
        console.log(e.data)
    }

    handleFlash = () => {
        this.setState({ flash : this.state.flash ? 0 : 1})
    }

    render () {
        const { flash } = this.state
        console.log(this.props.parking)
        
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
                <Overlay isVisible = {this.props.loading} height = {'auto'}>
                    <View style = {qrStyles.loadingStyle}>
                        <ActivityIndicator size={50} color= {colors.main.flatRed} />
                        <Text style = {qrStyles.loadingText}>
                            Loading . . .
                        </Text>
                    </View>
                </Overlay>
            </View>
        )
    }
}

const mapStore = ({ parking, user, vehicle }) => {
    return {
        token : parking.token,
        account : user.account,
        vehicle : vehicle.data,
        loading : parking.loading,
        parking : parking
    }
}

const mapDispatch = () => {
    return {
        enterParking,
        leaveParking,
        payParking
    }
}

export default connect(mapStore, mapDispatch())(QrScanner)