import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Alert, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from '@react-native-community/geolocation'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'
import { getParkingArea } from '../../actions'

// import styles
import { mapStyles } from '../../styles/feed'

class Map extends React.Component {
    state = {
        initialPosition : null
    }

    async componentDidMount () {
        try {
            // get area data
            this.props.getParkingArea()

            // request enable location
            const data = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
            console.log('request enable location', data)

            // request get current location
            this.requestLocationPermission()
        } catch (err) {
            console.log(err)
        }
    }

    onCalloutClick = (location) => {
        console.log(location)
        console.log(this.state.initialPosition)
    }

    requestLocationPermission = async () => {
        try {
            console.log('request get location')
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            console.log('request status : ', response)
            if (response === 'granted') {
                this.getCurrentLocation()
            }
        } catch (error) {
            console.log('error : ', error)
        }

    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            // if succes :
            position => {
                console.log('position : ', JSON.stringify(position))
                const initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015, // this define ratio of map that will be visible
                    longitudeDelta: 0.0121,
                }
                this.setState({ initialPosition })
            },
            // if error
            error => Alert.alert(error.message)
        )
    }

    renderMarker = () => {
        return this.props.area.map(({id, coordinates, place_name, car_cost, motor_cost, car_slot, motor_slot}) => {
            return <Marker
                key = {id}
                coordinate = {{latitude : coordinates ? coordinates.latitude : 0, longitude : coordinates ? coordinates.longitude : 0}}
            >
                <Callout onPress = { _ => this.onCalloutClick({latitued : coordinates.latitude, longitude : coordinates.longitude})}>
                    <View style = {{height : 100, width : 200, borderRadius : 50}}>
                        <Text>{place_name ? place_name : 'place name'}</Text>
                        <Text>{`Car price IDK ${car_cost}/10 minutes, Slot : ${car_slot}`}</Text>
                        <Text>{`Motor price IDK ${motor_cost}/10 minutes, Slot : ${motor_slot}`}</Text>
                    </View>
                </Callout>
            </Marker>
        })
    }

    render () {
        const { initialPosition } = this.state
        const { navigation } = this.props
        console.log('area : ', this.props.area)
        return (
            <View style = {mapStyles.container}>
                <MapView
                    // remove if not using Google Maps
                    provider = {PROVIDER_GOOGLE} 
                    style = {mapStyles.map}
                    ref = { map => this._map = map}
                    showsUserLocation = {true}
                    initialRegion = { initialPosition }
                >
                    {this.renderMarker()}
                </MapView>
                <TouchableWithoutFeedback onPress = { _ => navigation.goBack()}>
                    <View style = {mapStyles.back}>
                        <Icon name = 'arrow-back' size = {25} color = 'black'/>
                    </View>
                </TouchableWithoutFeedback> 
            </View>
        )
    }
}

const mapStore = ({ area }) => {
    return {
        area : area.data
    }
}

export default  connect(mapStore, { getParkingArea })(Map)