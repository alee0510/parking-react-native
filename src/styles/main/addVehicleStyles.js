import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const addVehicleStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray20,
        paddingHorizontal : '8%',
        paddingVertical : '20%'
    },
    title : {
        fontSize : 32,
        ...typography.bold
    },
    typeBox : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 15,
        justifyContent : 'space-between'
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4),
        marginVertical : 5
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 2
    },
    button : {
        marginTop : '10%',
        marginHorizontal : '10%'
    },
    buttonStyle : {
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
        fontSize : 20,
        height : 50
    },
    inputTitle : {
        fontSize : 16, 
        ...typography.bold, 
        marginRight : 10
    },
    policeInputContainer : {
        ...container.depth(4), 
        marginVertical : '2%'
    }
})