import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from '@react-native-community/geolocation'

// import styles
import { colors, container } from '../../styles'

class Map extends React.Component {
    state = {
        initialPosition : null
    }

    componentDidMount () {
        this.requestLocationPermission()
    }

    requestLocationPermission = async () => {
        try {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            console.log('request status : ', response)
            if (response === 'granted') {
                this.getCurrentLocation()
            }

        } catch (error) {
            console.log(error)
        }

    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            // if succes :
            position => {
                console.log(JSON.stringify(position))
                const initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015, // this define ratio of map that will be visible
                    longitudeDelta: 0.0121,
                }
                this.setState({ initialPosition })
            },
            // if error
            error => Alert.alert(error.message),
            // options
            { enableHighAccuracy : true, timeout : 10000, maximumAge : 1000 }
        )
    }

    render () {
        const { initialPosition } = this.state
        const { navigation } = this.props
        return (
            <View style = {styles.container}>
                <MapView
                    // remove if not using Google Maps
                    provider = {PROVIDER_GOOGLE} 
                    style = {styles.map}
                    ref = { map => this._map = map}
                    showsUserLocation = {true}
                    initialRegion = { initialPosition }
                    >
                        <Marker
                            coordinate = {{latitude : -7.1358475730352975, longitude : 111.165600682721834}}
                        >
                            <Callout>
                                <Image 
                                source = {{
                                    uri : 'https://images-na.ssl-images-amazon.com/images/I/61kjg9VYF8L._AC_SY606_.jpg'
                                }} style={{width: 200, height: 200}}/>
                                <Text>My Home</Text>
                            </Callout>
                        </Marker>
                    </MapView>
                    <TouchableWithoutFeedback onPress = { _ => navigation.goBack()}>
                        <View style = {styles.back}>
                            <Icon name = 'arrow-back' size = {25} color = 'black'/>
                        </View>
                    </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    map : {
        flex : 1
    },
    back : {
        height : 50,
        width : 50,
        backgroundColor : colors.main.white,
        position : 'absolute',
        top : 20,
        left : 10,
        ...container.center,
        ...container.depth(2),
        borderRadius : 25
    }
})

export default Map