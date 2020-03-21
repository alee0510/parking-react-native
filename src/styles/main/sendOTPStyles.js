import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const sendStyles = StyleSheet.create({
    container : {
        flex : 1
    },
    form : {
        flex : 1,
        backgroundColor : colors.neutrals.gary20,
        paddingHorizontal : '10%',
        justifyContent : 'center',
        alignItems : 'center'
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
    buttonNext : {
        height : 50, width : 50,
        backgroundColor : colors.main.flatRed,
        borderRadius : 25,
        ...container.center,
        ...container.depth(2)
    },
    info : {
        textAlign : 'center', 
        marginVertical : 23,
        marginHorizontal : 30,
        fontSize : 13,
        ...typography.regular
    }
})