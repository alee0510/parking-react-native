import React from 'react'
import { connect } from 'react-redux'
import { View, Picker, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { 
    getCarBrand, 
    getMotorBrand, 
    getCarTypeById, 
    getMotorTypeById 
} from '../../actions'

// import component
import Header from '../../components/header'

// import styles
import { vehicleStyles } from '../../styles/setting'

class Vehicle extends React.Component {
    state = {
        iconEdit : 0,
        disableInput : true,
        type : 1,
        police_no : '',
        vehicle_type : null,
        brand_id : null,
        type_id : null,
        color : ''
    }

    componentDidMount () {
        const type = this.props.vehicle.vehicle_type
        if (type == 1) {
            this.props.getCarBrand()
            this.props.getCarTypeById(type)
            return
        }
        this.props.getMotorBrand()
        this.props.getMotorTypeById(type)
    }

    onButtonEdit = () => {
        
    }

    renderBrand = () => {
        this.props.carBrand.map(({id, brand}) => {
            return <Picker.Item key = {id} label = {brand} value = {id}/>
        })
    }

    renderType = () => {
        this.props.carType.map(({id, name}) => {
            return <Picker.Item key = {id} label = {name} value = {id}/>
        })
    }

    render () {
        const { iconEdit, disableInput } = this.state
        const { vehicle, navigation } = this.props
        console.log('vehicle data : ', this.props.vehicle)

        return (
            <View style = {vehicleStyles.container}>
                <Header
                    title = 'Vehicle'
                    edit = {iconEdit}
                    handleEdit = { _ => this.setState({ iconEdit : iconEdit ? 0 : 1 })}
                    handleBack = { _ => navigation.goBack()}
                    />
                <View style = {vehicleStyles.form}>
                    <Picker
                        selectedValue={vehicle.vehicle_type}
                        style={{height: 50, width: 150}}
                        onValueChange = { value => this.setState({ type : value })}
                        mode = 'dropdown'
                        enabled = {!disableInput}
                    >
                        <Picker.Item label="Car" value={1}/>
                        <Picker.Item label="Motorcycle" value={2}/>
                    </Picker>
                    <Input
                        label = 'Police No'
                        value = {vehicle.police_no}
                        disabled = {disableInput}
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                    <Input
                        label = 'Color'
                        value = {vehicle.color || 'none'}
                        disabled = {disableInput}
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                    <View>
                        <View style = {vehicleStyles.picker}>
                            <Text style = {vehicleStyles.pickerTitle}>Brand</Text>
                            <Picker
                                selectedValue = {vehicle.brand_id}
                                style = {{height: 50, width: '50%'}}
                                enabled = {!disableInput}
                            >
                                <Picker.Item label = {vehicle.brand} value = {vehicle.brand_id}/>
                            </Picker>
                        </View>
                        <View style = {vehicleStyles.picker}>
                            <Text style = {vehicleStyles.pickerTitle}>Type</Text>
                            <Picker
                                selectedValue = {vehicle.type_id}
                                style = {{height: 50, width: '50%'}}
                                enabled = {!disableInput}
                            >
                                <Picker.Item label = {vehicle.type} value={vehicle.type_id}/>
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStore = ({ vehicle, vehicleData }) => {
    return {
        vehicle : vehicle.data,
        carBrand : vehicleData.carBrand,
        motorBrand : vehicleData.motorBrand,
        carType : vehicleData.carType,
        motorType : vehicle.motorType
    }
}

const mapDispatch = () => {
    return {
        getCarBrand,
        getCarTypeById,
        getMotorBrand,
        getMotorTypeById
    }
}

export default connect(mapStore, mapDispatch())(Vehicle)