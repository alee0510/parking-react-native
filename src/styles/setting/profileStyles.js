import { StyleSheet } from 'react-native'
import { colors,container, typography} from '../index'

export const profileStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10
    },
    imageContainer : {
        alignItems : 'center',
        paddingVertical : 20,
    },
    avatar : {
        position : 'relative'
    },
    cameraIcon : {
        height : 40, width : 40,
        borderRadius : 20,
        backgroundColor : colors.main.yellow,
        ...container.center,
        position : 'absolute',
        bottom : 0,
        right : 0,
        zIndex : 5
    },
    buttonStyle : {
        height : '100%', 
        width : '100%', 
        ...container.center
    },
    input : {
        paddingHorizontal : 30
    },
    inputContainer : {
        marginVertical : 10
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    },
    overlayStyle : {
        paddingVertical : 10, 
        paddingHorizontal : 15
    },
    optionsContainer : {
        flexDirection : 'row', 
        alignItems : 'center', 
        marginVertical : 10
    },
    optionsTitle : {
        marginLeft : 10, 
        fontSize : 16, 
        ...typography.regular
    }
})