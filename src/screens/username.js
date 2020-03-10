import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

// import style
import { colors, typography, container } from '../styles'

const Username = ({ navigation }) => {
    const [edit, setEdit] = React.useState(0)
    return (
        <View style = {styles.container}>
            <View style = {styles.headerTitle}>
                <TouchableWithoutFeedback onPress = { _ => navigation.goBack()}>
                    <View>
                        <Icon name = 'arrow-back' size = {30}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text 
                    style = {{
                        fontSize : 28, 
                        ...typography.bold, 
                        marginLeft : 10,
                        flex : 1
                    }}
                >
                        Account
                </Text>
                <Button
                    icon={{
                        name: edit ? 'check' : 'edit',
                        size: 30,
                        color: 'black'
                    }}
                    buttonStyle = {{
                        backgroundColor : 'none'
                    }}
                    loading = {false}
                    onPress = { _ => setEdit(edit ? 0 : 1)}
                />
            </View>
            <View style = {styles.input}>
                <Input
                    label = 'username'
                    value = {'alee0510'}
                    disabled = {false}
                    containerStyle = {styles.inputContainer}
                    labelStyle = {styles.label}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginVertical : 10
    },
    label : {
        ...typography.semiBold, 
        color : 'black'
    }
})

export default Username
