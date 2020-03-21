import React from 'react'
import { connect } from 'react-redux'
import { View, Picker, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { 
    getCarBrand, 
    getMotorBrand, 
    getCarTypeById, 
    getMotorTypeById,
    editVehicle 
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
        vehicle_type : 1,
        brand_id : null,
        type_id : null,
        color : ''
    }

    componentDidMount () {
        const type = this.props.vehicle.vehicle_type
        this.props.getCarBrand()
        this.props.getMotorBrand()
        if (type == 1) {
            this.props.getCarTypeById(type)
            return
        }
        this.props.getMotorTypeById(type)
    }

    onButtonEdit = () => {
        const { iconEdit } = this.state
        const { vehicle } = this.props
        // initialize edit
        if(!iconEdit) {
            return this.setState({
                iconEdit : 1,
                disableInput : false,
                type : vehicle.vehicle_type,
                police_no : vehicle.police_no,
                brand_id : vehicle.brand_id,
                type_id : vehicle.type_id,
                color : vehicle.color
            })
        }
        this.setState({
            iconEdit : 0,
            disableInput : true
        },
        _ => {
            console.log('do request edit vehicle')
            this.props.editVehicle({
                vehicle_type : this.state.vehicle_type,
                police_no : this.state.police_no,
                color : this.state.color,
                brand_id : this.state.brand_id,
                type_id : this.state.type_id
            })
        }
        )
        
    }

    onButtonCancel = () => {
        this.setState({
            iconEdit : 0,
            disableInput : true,
            type : 1,
            police_no : '',
            vehicle_type : null,
            brand_id : null,
            type_id : null,
            color : ''
        })
    }

    onVehicleChange = (id) => {
        const { vehicle_type, brand_id } = this.state
        // if id same
        if (vehicle_type === id) return null

        // change state
        console.log('change state')
        this.setState({ vehicle_type : id })
        if (vehicle_type === 1) {
            return this.props.getCarTypeById(brand_id)
        } 
        this.props.getMotorTypeById(id)
    }

    onChangeBrand = (id) => {
        const { vehicle_type } = this.state

        // change state
        this.setState({ brand_id : id })
        console.log('change brand')
        if(vehicle_type === 1) {
            return this.props.getCarTypeById(id)
        }
        this.props.getMotorTypeById(id)
    }

    renderBrand = () => {
        const { vehicle_type } = this.state
        const { carBrand, motorBrand } = this.props
        return (vehicle_type === 1 ? carBrand : motorBrand).map(({id, brand}) => (
            <Picker.Item key = {id} label = {brand} value = {id}/>
        ))
    }

    renderType = () => {
        const { vehicle_type } = this.state
        const { carType, motorType } = this.props
        return (vehicle_type === 1 ? carType : motorType).map(({id, name}) => (
            <Picker.Item key = {id} label = {name} value = {id}/>
        ))
    }

    render () {
        const { iconEdit, disableInput, police_no, vehicle_type, brand_id, type_id, color } = this.state
        const { vehicle, navigation } = this.props
        console.log('vehicle data : ', this.props.vehicle)
        console.log('motor brand : ', this.props.motorBrand)

        return (
            <View style = {vehicleStyles.container}>
                <Header
                    title = 'Vehicle'
                    edit = {iconEdit}
                    handleEdit = {this.onButtonEdit}
                    handleBack = { _ => iconEdit ? this.onButtonCancel()  : navigation.goBack()}
                    loading = {this.props.loading}
                    />
                <View style = {vehicleStyles.form}>
                    <Picker
                        selectedValue={iconEdit ? vehicle_type : vehicle.vehicle_type}
                        style={{height: 50, width: 150}}
                        onValueChange = { value => this.setState({ type : value })}
                        mode = 'dropdown'
                        enabled = {!disableInput}
                        onValueChange = { value => this.onVehicleChange(value)}
                    >
                        <Picker.Item label = "Car" value = {1}/>
                        <Picker.Item label = "Motorcycle" value = {2}/>
                    </Picker>
                    <Input
                        label = 'Police No'
                        value = {iconEdit ? police_no : vehicle.police_no}
                        disabled = {disableInput}
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                    <Input
                        label = 'Color'
                        value = {iconEdit ? color : vehicle.color}
                        disabled = {disableInput}
                        containerStyle = {vehicleStyles.inputContainer}
                        labelStyle = {vehicleStyles.label}
                    />
                    <View>
                        <View style = {vehicleStyles.picker}>
                            <Text style = {vehicleStyles.pickerTitle}>Brand</Text>
                            <Picker
                                selectedValue = {iconEdit ? brand_id : vehicle.brand_id}
                                style = {{height: 50, width: '50%'}}
                                enabled = {!disableInput}
                                onValueChange = { value => this.onChangeBrand(value)}
                            >
                                {
                                    iconEdit ? this.renderBrand()
                                    :
                                    <Picker.Item label = {vehicle.brand} value = {vehicle.brand_id}/>
                                }
                            </Picker>
                        </View>
                        <View style = {vehicleStyles.picker}>
                            <Text style = {vehicleStyles.pickerTitle}>Type</Text>
                            <Picker
                                selectedValue = {iconEdit ? type_id : vehicle.type_id}
                                style = {{height: 50, width: '50%'}}
                                enabled = {!disableInput}
                                onValueChange = { value => this.setState({ type_id : value })}
                            >
                                {
                                    iconEdit ? this.renderType()
                                    :
                                    <Picker.Item label = {vehicle.type} value={vehicle.type_id}/>
                                }
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
        loading : vehicle.loading,
        carBrand : vehicleData.carBrand,
        motorBrand : vehicleData.motorBrand,
        carType : vehicleData.carType,
        motorType : vehicleData.motorType,
    }
}

const mapDispatch = () => {
    return {
        getCarBrand,
        getCarTypeById,
        getMotorBrand,
        getMotorTypeById,
        editVehicle
    }
}

export default connect(mapStore, mapDispatch())(Vehicle)