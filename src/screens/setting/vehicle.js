import React from 'react'
import { connect } from 'react-redux'
import { View, Picker } from 'react-native'
import { Input } from 'react-native-elements'
import { getVehicle } from '../../actions'

// import component
import Header from '../../components/header'

// import styles
import { vehicleStyles } from '../../styles/setting'

class Vehicle extends React.Component {
    state = {
        iconEdit : false,
        type : 1
    }

    componentDidMount () {
        this.props.getVehicle()
    }

    render () {
        const { iconEdit, type } = this.state
        console.log('vehicle data : ', this.props.vehicle)
        return (
            <View style = {vehicleStyles.container}>
                <Header
                    title = 'Vehicle'
                    edit = {iconEdit}
                    handleEdit = { _ => this.setState({ iconEdit : iconEdit ? 0 : 1 })}
                    handleBack = { _ => this.props.navigation.goBack()}
                />
                <View style = {vehicleStyles.form}>
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
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                    <View style = {vehicleStyles.brand}>
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
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                </View>
            </View>
        )
    }
}

const mapStore = ({ vehicle }) => {
    return {
        vehicle : vehicle.data
    }
}

const mapDispatch = () => {
    return {
        getVehicle
    }
}

export default connect(mapStore, mapDispatch())(Vehicle)