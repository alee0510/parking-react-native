import React from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import { Input } from 'react-native-elements'

// import component
import Header from '../components/header'

// import styles
import { typography } from '../styles'

class Vehicle extends React.Component {
    state = {
        iconEdit : false,
        type : 1
    }

    render () {
        const { iconEdit, type } = this.state
        return (
            <View style = {styles.container}>
                <Header
                    title = 'Vehilce'
                    edit = {iconEdit}
                    handleEdit = { _ => this.setState({ iconEdit : iconEdit ? 0 : 1 })}
                    handleBack = { _ => this.props.navigation.goBack()}
                />
                <View style = {styles.form}>
                    <Picker
                        selectedValue={type}
                        style={{height: 50, width: 150}}
                        onValueChange = { value => this.setState({ type : value })}
                    >
                        <Picker.Item label="Car" value={1}/>
                        <Picker.Item label="Motorcycle" value={2}/>
                    </Picker>
                    <Input
                        label = 'police no'
                        value = {'B 1346 BH'}
                        disabled = {false}
                        containerStyle = {styles.inputContainer}
                        labelStyle = {styles.label}
                    />
                    <View style = {styles.brand}>
                        <Picker
                            selectedValue={type}
                            style={{height: 50, width: '50%'}}
                            onValueChange = { value => this.setState({ type : value })}
                        >
                            <Picker.Item label="Car" value={1}/>
                            <Picker.Item label="Motorcycle" value={2}/>
                        </Picker>
                        <Picker
                            selectedValue={type}
                            style={{height: 50, width: '50%'}}
                            onValueChange = { value => this.setState({ type : value })}
                        >
                            <Picker.Item label="Car" value={1}/>
                            <Picker.Item label="Motorcycle" value={2}/>
                        </Picker>
                    </View>
                    <Input
                        label = 'color'
                        value = {'none'}
                        disabled = {false}
                        containerStyle = {styles.inputContainer}
                        labelStyle = {styles.label}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    brand : {
        flexDirection : 'row'
    }
}) 

export default Vehicle