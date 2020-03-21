import { StyleSheet } from 'react-native'
import { container, colors, typography } from '../index'

export const feedStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10,
    },
    headerLeft : {
        height : '100%',
        flexDirection : 'row',
        alignItems : 'center'
    },
    headerCenter : {
        marginLeft : 10, 
        height : '100%', 
        width : 200, 
        justifyContent : 'center'
    },
    card : {
        height : 300,
        borderRadius : 15,
        overflow : 'hidden',
        ...container.depth(5)
    },
    menu : {
        width : '100%',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignContent : 'center'
    },
    menuIcon : {
        height : 65,
        width : 65,
        backgroundColor : colors.main.flatRed,
        ...container.center,
        borderRadius : 20,
        marginVertical : 15,
        ...container.depth(4)
    },
    news : {
        width : '100%',
    },
    storiesTitle : {
        fontSize : 24, 
        ...typography.bold, 
        marginVertical : 15
    },
    feturesTitle : {
        fontSize : 24, 
        ...typography.bold, 
        marginTop : 20
    }
})