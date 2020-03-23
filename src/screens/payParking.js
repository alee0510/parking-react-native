import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import FingerprintScanner from 'react-native-fingerprint-scanner'
import { CommonActions } from '@react-navigation/native'
import { payParking, leaveParking } from '../actions'

// import logo
import Logo from '../assets/parking_app.svg'

// import styles
import { paymentStyles } from '../styles/paymentStyles'

class Payment extends React.Component {
    state = {
        fingerprint : false,
        duration : 0,
        total : 0
    }

    async componentDidMount () {
        try {
            // initialize fingerprint
            const biometryType =  await FingerprintScanner.isSensorAvailable()
            console.log(biometryType)
            this.setState({ fingerprint : true })

            // set duration
            let duration = Math.ceil((this.props.token - Date.now())/60000)
            if (duration < 10) duration = 10
            const total = Math.ceil(duration/10) * this.props.cost
            this.setState({duration : duration, total : total})

        } catch (err) {
            console.log(err.message || err)
        }
    }

    componentWillUnmount () {
        FingerprintScanner.release()
    }

    onButtonPay = async () => {
        const { fingerprint, duration, total } = this.state
        const { id, route, areaId } = this.props
        try {
            if(fingerprint) {
                // authenticate using fingerprint
                const response = await FingerprintScanner.authenticate({
                    description : 'Pay with your fingerprint.',
                    onAttempt : _ => console.log('fingerprint scan failed.')
                })
                console.log('response : ', response)
                if (!response) throw new Error ('invalid fingerprint')
            }
            
            // pay parking first
            console.log('pay parking')
            this.props.payParking(id, total)
    
            // leave parking
            console.log('leave parking')
            this.props.leaveParking(route.params.url, areaId, duration)
    
            // const action
            this.props.navigation.dispatch(CommonActions.reset({
                index : 0,
                routes : [{ name : 'Feed-Navigation'}]
            }))
        } catch (err) {
            FingerprintScanner.release()
            console.log(err.message || err)
        }
    }
    
    render () {
        const { duration, total } = this.state
        console.log('duration : ', duration)
        console.log('total : ', total)
        console.log('areaId : ', this.props.areaId)
        console.log('user id : ', this.props.id)
        console.log('url : ', this.props.route.params.url)


        const date = new Date()
        return (
            <View style = {paymentStyles.container}>
                <View style = {paymentStyles.receiptContainer}>
                    <View style = {paymentStyles.logoContainer}>
                        <Logo height = {100} width = {100}/>
                    </View>
                    <View style = {paymentStyles.content}>
                        <Text style = {paymentStyles.title}>
                            Trancation Receipt
                        </Text>
                        <View style = {{margin : 20}}>
                            <Text style ={paymentStyles.text}>
                                Duration : {duration}m
                            </Text>
                            <Text style ={paymentStyles.text}>
                                Date : {date.toLocaleDateString()}
                                </Text>
                            <Text style ={paymentStyles.text}>
                                Place : {this.props.place}
                            </Text>
                            <Text style ={paymentStyles.text}>
                                Total : {total}
                            </Text>
                        </View>
                    </View>
                    <View style = {paymentStyles.imageContainer}>
                        <Image source = {require('../assets/barcode.png')} />
                    </View>
                </View>
                <View style = {paymentStyles.leftCircle}></View>
                <View style = {paymentStyles.rightCircle}></View>
                <Button
                    icon = {<Icon name="dollar" type = 'font-awesome' size={15} color="white"/>}
                    title="Pay"
                    buttonStyle = {paymentStyles.buttonStyle}
                    iconContainerStyle = {{margin : 20}}
                    containerStyle = {{marginVertical : 15}}
                    onPress = {this.onButtonPay}
                    loading = {this.props.loading}
                />
            </View>
        )
    }
}

const mapStore = ({ user, parking, wallet }) => {
    return {
        id : user.account.id,
        loading : wallet.loading,
        place : parking.place,
        token : parking.token,
        areaId : parking.id,
        cost : parking.cost

    }
}

const mapDispatch = () => {
    return {
        payParking,
        leaveParking
    }
}

export default connect(mapStore, mapDispatch())(Payment)