import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {} from 'react-native-elements'

// import component
import Header from '../components/header'

class Vehicle extends React.Component {
    state = {
        iconEdit : false
    }

    render () {
        const { iconEdit } = this.state
        return (
            <View style = {styles.container}>
                <Header
                    title = 'Vehilce'
                    edit = {iconEdit}
                    handleEdit = { _ => this.setState({ iconEdit : iconEdit ? 0 : 1 })}
                    handleBack = { _ => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
}) 

export default Vehicle