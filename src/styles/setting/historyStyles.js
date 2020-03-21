import { StyleSheet } from 'react-native'
import { colors, typography, container } from '../index'

export const historyStyles = StyleSheet.create({
    container : {
        flex : 1
    },
    content : {
        flex : 1,
        padding : 25
    },
    header : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : colors.main.white,
        alignItems : 'center',
        ...container.depth(5)
    },
    headerTitle : {
        ...typography.bold, 
        fontSize : 28, 
        marginLeft : 10,
        flex : 1,
        color : colors.neutrals.gray220
    },
    listContent : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10,
        backgroundColor : 'white',
        borderRadius : 5,
        borderBottomWidth : 0.3,
        borderBottomColor : colors.neutrals.gray220
    },
    listPlace : {
        fontSize : 16, 
        ...typography.semiBold
    },
    listDate : {
        fontSize : 12, 
        ...typography.light
    },
    listDuration : {
        fontSize : 12, 
        ...typography.light
    },
    listAmount : {
        fontSize : 16, 
        ...typography.semiBold
    }
})