import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { URL_MAP } from '../helpers/API_URL'

const MapWebView = ({navigation, route}) => {
    console.log('params', route.params)
    const { direction, latitude, longitude } =  route.params
    return (
        <View style = {{flex : 1}}>
            <WebView style = {{flex : 1}} source = {{uri : URL_MAP + `/${latitude},${longitude}` + `/${direction}`}}/>
        </View>
    )
}

export default MapWebView