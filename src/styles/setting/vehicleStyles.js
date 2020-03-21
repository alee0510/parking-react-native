import { StyleSheet } from 'react-native'
import { typography} from '../index'

export const vehicleStyles = StyleSheet.create({
    container : {
        flex : 1
    },
    form : {
        paddingHorizontal : 30,
        marginTop : 20
    },
    inputContainer : {
        marginVertical : 10
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    },
    picker : {
        flexDirection : 'column',
        width : '100%',
        paddingHorizontal : 10
    },
    pickerTitle : {
        fontSize : 15,
        ...typography.bold
    }
})