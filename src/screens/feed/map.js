import React from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    Alert, 
    TouchableWithoutFeedback 
} from 'react-native'
import { Icon, Button } from 'react-native-elements'
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

    onCalloutClick = (direction, place_name) => {
        const { initialPosition } = this.state
        Alert.alert(
            'Get Direction',
            `${place_name}`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () =>this.props.navigation.navigate('Map-Web', {
                    latitude : initialPosition.latitude, 
                    longitude : initialPosition.longitude, 
                    direction
                })},
            ],
            {cancelable: false},
        );
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
        return this.props.area.map(({
            id, 
            coordinates, 
            place_name, 
            car_cost, 
            motor_cost, 
            car_slot,
            motor_slot, 
            direction
        }) => {
            return <Marker
                key = {id}
                coordinate = {{
                    latitude : coordinates ? coordinates.latitude : 0, 
                    longitude : coordinates ? coordinates.longitude : 0
                }}
            >
                <Callout 
                    onPress = { _ => this.onCalloutClick(direction, place_name)}
                    style = {{padding : 15}}
                >
                    <View style = {mapStyles.callOutContentConatiner}>
                        <Text style = {mapStyles.callOutPlace}>
                            {place_name ? place_name : 'place name'}
                        </Text>
                        <Text style = {{paddingVertical : 5}}>
                            {`Car IDK ${car_cost}/10min, Slot : ${car_slot}`}
                        </Text>
                        <Text>
                            {`Motor IDK ${motor_cost}/10min, Slot : ${motor_slot}`}
                        </Text>
                        <Button 
                            title = 'Go'
                            icon = { <Icon name = 'directions' size = {25} color = 'white'/>}
                            buttonStyle = {{padding : 5, borderRadius : 50, marginTop : 15}}
                            titleStyle = {{marginLeft : 20}}
                        />
                    </View>
                </Callout>
            </Marker>
        })
    }

    render () {
        const { initialPosition } = this.state
        const { navigation } = this.props
        console.log('area : ', this.props.area)
        console.log(initialPosition)
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