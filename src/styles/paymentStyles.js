import { StyleSheet } from 'react-native'
import * as colors from './colors'
import * as typography from './typography'

export const paymentStyles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 30,
        backgroundColor : colors.neutrals.gray20
    },
    receiptContainer : {
        height : '90%',
        backgroundColor : colors.main.white,
        alignItems : 'center',
        borderRadius : 10,
        padding : 50
    },
    logoContainer : {
        width : 'auto',
    },
    imageContainer : {
        position : 'absolute',
        bottom : 30
    },
    content : {
        width : '100%',
        marginVertical : 20
    },
    text : {
        paddingVertical : 5
    },
    buttonStyle : {
        height : 50,
        borderRadius : 10,
        backgroundColor : colors.main.green
    },
    title : {
        fontSize : 20, 
        ...typography.bold, 
        textAlign : 'center', 
        paddingVertical : 20
    },
    leftCircle : {
        height : 40,
        width : 40,
        borderRadius : 20,
        backgroundColor : colors.neutrals.gray20,
        position : 'absolute',
        left : 10,
        top : '65%'
    },
    rightCircle : {
        height : 40,
        width : 40,
        borderRadius : 20,
        backgroundColor : colors.neutrals.gray20,
        position : 'absolute',
        right : 10,
        top : '65%'   
    }
})
