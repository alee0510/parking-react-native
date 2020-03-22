import { StyleSheet } from 'react-native'
import * as colors from './colors'
import * as container from './container'
import * as typography from './typography'

export const qrStyles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor : colors.main.white
    },
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
        paddingHorizontal : 25,
        justifyContent : 'center'
    },
    icon : {
        width : '50%', height : '100%',
        justifyContent : 'center'
    },
    customMarker : {
        height : 300, 
        width : 300, 
        borderWidth : 2.5, 
        borderColor : colors.main.flatRed
    },
    footerInfo : {
        fontSize : 16, 
        ...typography.bold, 
        paddingBottom : 5
    }
})