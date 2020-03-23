import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

const MyWebView = ({navigation, route}) => {
    console.log(route.params.url)
    return (
        <View style = {{flex : 1}}>
            <WebView style = {{flex : 1}} source = {{uri : route.params.url}}/>
        </View>
    )
}

export default MyWebView