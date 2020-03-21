import { StyleSheet } from 'react-native'
import { typography, container, colors } from '../index'

export const walletStyles = StyleSheet.create({
    container : {
        flex : 1,
        position : 'relative'
    },
    content : {
        flex : 1,
        alignItems : 'center'
    },
    header : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : colors.main.flatRed,
        alignItems : 'center',
    },
    headerTitle : {
        ...typography.bold, 
        fontSize : 28, 
        marginLeft : 10,
        flex : 1,
        color : colors.main.white
    },
    subHeaderTitle : {
        width : '100%', 
        padding : 5, 
        fontSize : 20,
        ...typography.semiBold,
        textTransform : 'capitalize'
    },
    box : {
        width : '100%',
        height : '15%',
        backgroundColor : colors.main.flatRed
    },
    saldoBox : {
        width : '85%',
        height : 100,
        backgroundColor : colors.main.white,
        position : 'absolute',
        top : '7%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 20,
        borderRadius : 15,
        ...container.depth(4)
    },
    saldo : {
        fontSize : 42, 
        ...typography.bold, 
        color : colors.neutrals.gray130
    },
    history : {
        width : '100%',
        flex : 1,
        marginTop : '15%',
        paddingHorizontal : 25,
        paddingVertical : 10
    },
    historyContent : {
        flex : 1,
        marginTop : 10,
    },
    historyList : {
        width : '100%',
        borderBottomWidth : 0.3,
        borderBottomColor : colors.neutrals.gray220,
        backgroundColor : colors.neutrals.gray10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 10,
        paddingVertical : 10
    },
    historyListTitle : {
        fontSize : 16, 
        ...typography.semiBold
    },
    historyListDate : {
        fontSize : 12, 
        ...typography.light
    },
    historyListAmountBox :{
        ...container.center
    },
    historyListStatus : {
        fontSize : 12,
        ...typography.regular
    },
    historyListAmount : {
        fontSize : 16, 
        ...typography.semiBold
    },
    plus : {
        height : 40, width : 40,
        borderRadius : 20,
        backgroundColor : colors.main.flatRed,
        ...container.depth(4),
        ...container.center
    }
})