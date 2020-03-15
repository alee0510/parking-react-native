import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { Icon } from 'react-native-elements'

// import styles
import { colors, typography, container } from '../styles'

class Map extends React.Component {
    state = {
        coordinates : [
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''},
            {name : '', lat : '', long : ''}
        ]
    }
    render () {
        const { coordinates } = this.state
        const { navigation } = this.props
        return (
            <View style = {styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    // define initial positiom
                    region={{
                        latitude: -7.1358475730352975,
                        longitude: 111.165600682721834,
                        latitudeDelta: 0.015, // this define ratio of map that will be visible
                        longitudeDelta: 0.0121,
                    }}
                    >
                        {/* create marker, when we click, we will see title */}
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
                            {/* we can also change marker using custom image */}
                            {/* <Image source = {{uri : '....}}/> */}
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