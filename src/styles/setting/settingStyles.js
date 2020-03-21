import { StyleSheet } from 'react-native'
import { colors,container, typography} from '../index'

export const settingStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10
    },
    title : {
        fontSize : 28,
        ...typography.bold,
        width : '100%',
        paddingHorizontal : 20,
        paddingVertical : 15,
    },
    accountContainer : {
        width : '100%',
        paddingHorizontal : 25,
        paddingVertical : 15,
        flexDirection : 'row',
        alignItems : 'center'
    },
    settings : {
        paddingHorizontal : 30,
    },
    subSetting : {
        marginVertical : 15
    },
    options : {
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 0.5,
        borderBottomColor : colors.neutrals.gray150,
        paddingVertical : 10
    },
    optionsText : {
        flex : 1,
        paddingLeft : 8,
        fontSize : 16,
        textTransform : 'capitalize',
        ...typography.regular
    },
    logOutButtonContainer : {
        height : 100,
        justifyContent : 'center',
    },
    logOutButton : {
        paddingVertical : 8,
        backgroundColor : colors.main.flatRed,
        flexDirection : 'row',
        marginHorizontal : '20%',
        borderRadius : 50,
        alignItems : 'center',
        justifyContent : 'center',
        ...container.depth(2)
    },
    logOutButtonText : {
        fontSize : 20,
        ...typography.semiBold,
        color : colors.main.white,
        textAlign : 'center'
    },
    profileContainer : {
        flex : 1, 
        justifyContent : 'center',
        marginLeft : 10
    },
    profileName : {
        fontSize : 20, 
        textTransform : 'capitalize', 
        ...typography.semiBold
    },
    settingTitle : {
        fontSize : 18, 
        ...typography.bold, 
        paddingVertical : 8
    }
})