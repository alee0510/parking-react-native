import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const loginStyles = StyleSheet.create({
    container : {
        flex : 1,
        ...container.center,
        backgroundColor : colors.neutrals.gray20
    },
    form : {
        height : '50%',
        width : '80%'
    },
    inputContainer : {
        ...container.depth(4),
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4)
    },
    inputStyle : {
        marginLeft : 5
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 10
    },
    button : {
        marginTop : '20%',
        marginHorizontal : 10
    },
    buttonStyle : {
        height : 50,
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
    },
    textOr : {
        fontSize : 14, 
        ...typography.regular,
        marginVertical : 15,
        textAlign : 'center'
    },
    textRegister : {
        fontSize : 14,
        ...typography.semiBold,
        textAlign : 'center',
        color : colors.main.blue
    }
})