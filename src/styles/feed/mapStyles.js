import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const mapStyles = StyleSheet.create({
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
    },
    callOutContentConatiner : {
        height : 'auto', 
        width : 'auto'
    },
    callOutPlace : {
        fontSize : 18, 
        ...typography.bold, 
        textAlign : 'center', 
        marginVertical : 10
    },
})