import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const verifyStyles = StyleSheet.create({
    container : {
        flex : 1
    },
    LinearGradient : {
        height : '100%',
        width : '100%'
    },
    form : {
        height : '50%',
        ...container.center
    },
    title : {
        fontSize : 24,
        color : colors.neutrals.gray10,
        marginVertical : 20,
        ...typography.bold
    },
    info : {
        fontSize : 16,
        textAlign : 'center',
        ...typography.regular,
        marginHorizontal : '10%',
        marginVertical : 10,
        color : colors.neutrals.gray10,
    },
    virtualKeyboard : {
        height : '50%',
        width : '100%',
        ...container.center,
    }
})