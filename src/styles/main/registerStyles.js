import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const registerStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray20,
        alignItems : 'center'
    },
    title : {
        fontSize : 32,
        ...typography.bold,
        color : colors.neutrals.gray220
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
        ...container.depth(4),
        marginVertical : 8
    },
    inputStyle : {
        marginLeft : 5
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 2
    },
    button : {
        marginTop : '8%',
        marginHorizontal : '10%'
    },
    buttonStyle : {
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
        height : 50
    },
})