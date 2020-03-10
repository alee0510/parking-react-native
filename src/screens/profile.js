import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Icon, Button, Avatar, Input } from 'react-native-elements'

// import styles
import { colors, typography, container } from '../styles'

class Profile extends React.Component {
    state = {
        iconEdit : 0,
        inputDisable : false
    }
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.headerTitle}>
                    <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
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
                        Profile
                    </Text>
                    <Button
                        icon={{
                            name: this.state.iconEdit ? 'check' : 'edit',
                            size: 30,
                            color: 'black'
                        }}
                        buttonStyle = {{
                            backgroundColor : 'none'
                        }}
                        loading = {false}
                        onPress = { _ => this.setState({ iconEdit : this.state.iconEdit ? 0 : 1})}
                    />
                </View>
                <ScrollView>
                    <View style = {styles.profileImage}>
                        <Avatar 
                            rounded 
                            size = {100} 
                            title = 'A' 
                            overlayContainerStyle = {{ 
                                backgroundColor : colors.main.flatRed, 
                                ...container.depth(5)
                            }}
                        />
                    </View>
                    <View style = {styles.input}>
                        <Input
                            label = 'name'
                            value = {'Ali Muksin'}
                            disabled = {false}
                            containerStyle = {styles.inputContainer}
                            labelStyle = {styles.label}
                        />
                        <Input
                            label = 'birth date'
                            value = {'O5-10-1994'}
                            disabled = {false}
                            containerStyle = {styles.inputContainer}
                            labelStyle = {styles.label}
                        />
                        <Input
                            label = 'phone'
                            value = {'+6285722286349'}
                            disabled = {false}
                            containerStyle = {styles.inputContainer}
                            labelStyle = {styles.label}
                        />
                        <Input
                            label = 'address'
                            value = {'Jl. Siliwangin dalam 3 No 3'}
                            disabled = {false}
                            containerStyle = {styles.inputContainer}
                            labelStyle = {styles.label}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
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
    profileImage : {
        // backgroundColor : 'yellow',
        alignItems : 'center',
        paddingVertical : 20
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
    }
})

export default Profile