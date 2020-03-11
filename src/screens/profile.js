import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Button, Avatar, Input } from 'react-native-elements'

// import component
import Header from '../components/header'

// import styles
import { colors, typography, container } from '../styles'

class Profile extends React.Component {
    state = {
        iconEdit : 0,
        inputDisable : false
    }
    render () {
        const { iconEdit, inputDisable } = this.state
        return (
            <View style = {styles.container}>
                <Header
                    title = 'Profile'
                    edit = {iconEdit}
                    handleEdit = { _ => this.setState({ iconEdit : iconEdit ? 0 : 1})}
                    handleBack = { _ => this.props.navigation.goBack()}
                />
                <ScrollView>
                    <View style = {styles.imageContainer}>
                        <View style = {styles.avatar}>
                            <Avatar 
                                rounded 
                                size = {125} 
                                title = 'A' 
                                overlayContainerStyle = {{ 
                                    backgroundColor : colors.main.flatRed, 
                                    ...container.depth(5)
                                }}
                            />
                            <TouchableOpacity>
                                <View style = {styles.cameraIcon}>
                                    <Icon name = 'camera-alt' color = 'white'/>
                                </View>
                            </TouchableOpacity>
                        </View>
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
        right : 0
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