import { StyleSheet } from 'react-native'
import { colors,container, typography} from '../index'

export const passwordStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10
    },
    headerTitle : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        paddingVertical : 15,
        backgroundColor : colors.main.white,
        alignItems : 'center',
        ...container.depth(5)
    },
    input : {
        paddingHorizontal : 30,
        marginTop : 20
    },
    inputContainer : {
        marginVertical : 10,
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    },
    iconContainer : {
        paddingRight : 5, 
        marginLeft : 0
    }
})