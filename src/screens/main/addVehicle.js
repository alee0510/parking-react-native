import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Picker } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { 
    getCarBrand, 
    getMotorBrand, 
    getCarTypeById, 
    getMotorTypeById,
    registerVehicle 
} from '../../actions'

// import style
import { typography } from '../../styles'
import { addVehicleStyles } from '../../styles/main'

class AddVehicle extends React.Component {
    state = {
        police_no : null,
        color : '',
        vehicle_type : 1,
        brand_id : 0,
        type_id : 0,
        disabled : false,
    }

    componentDidMount() {
        console.log('get all brands')
        this.props.getCarBrand()
        this.props.getMotorBrand()
    }

    onChangeBrand = (id) => {
        const { vehicle_type } = this.state
        this.setState({brand_id : id})
        if (vehicle_type === 1) { //car
            return this.props.getCarTypeById(id)
        }
        this.props.getMotorTypeById(id)
    }

    onButtonSubmit = () => {
        const { police_no, vehicle_type, brand_id, type_id, color } = this.state
        // request register vehicle
        this.props.registerVehicle({
            police_no, vehicle_type, brand_id, type_id, color, user_id : this.props.user_id
        })

        // navigate to next page
        this.props.navigation.replace('Sent-OTP')
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
        return (vehicle_type === 1? carType : motorType).map(({id, name}) => (
            <Picker.Item key = {id} label = {name} value = {id}/>
        ))
    }

    render () {
        const { police_no, vehicle_type, type_id, brand_id, disabled, color } = this.state
        const { navigation } = this.props
        return (
            <View style = {addVehicleStyles.container}>
                <View style = {{width : '80%'}}>
                    <Text style = {addVehicleStyles.title}>Add your Vehicle Info</Text>
                </View>
                <View style = {{ marginVertical : 20 }}>
                    <Input
                        label = 'Police No'
                        value = {police_no}
                        disabled = {false}
                        labelStyle = {addVehicleStyles.label}
                        containerStyle = {addVehicleStyles.policeInputContainer}
                        inputContainerStyle = {addVehicleStyles.inputContainerStyle}
                        inputStyle = {{marginLeft : 5}}
                        leftIcon={
                            <Icon name='ios-car' type = 'ionicon' size={24} color='black'/>
                        }
                        onChangeText = { value => this.setState({police_no : value})}
                    />
                    <Input
                        label = 'Color'
                        value = {color}
                        disabled = {false}
                        labelStyle = {addVehicleStyles.label}
                        containerStyle = {addVehicleStyles.policeInputContainer}
                        inputContainerStyle = {addVehicleStyles.inputContainerStyle}
                        inputStyle = {{marginLeft : 5}}
                        leftIcon={
                            <Icon name='ios-car' type = 'ionicon' size={24} color='black'/>
                        }
                        onChangeText = { value => this.setState({color : value})}
                    />
                    <View style = {addVehicleStyles.typeBox}>
                        <Text style = {addVehicleStyles.inputTitle}>
                            Vehicle type
                        </Text>
                        <Picker
                            selectedValue={vehicle_type}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.setState({ vehicle_type : value })}
                            enabled = {!disabled}
                        >
                            <Picker.Item label = "Car" value={1}/>
                            <Picker.Item label = "Motorcycle" value={2}/>
                        </Picker>
                    </View>
                    <View style = {addVehicleStyles.typeBox}>
                        <Text style = {addVehicleStyles.inputTitle}>
                            Brand
                        </Text>
                        <Picker
                            selectedValue={brand_id}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.onChangeBrand(value)}
                        >
                            {this.renderBrand()}
                        </Picker>
                    </View>
                    <View style = {addVehicleStyles.typeBox}>
                        <Text style = {addVehicleStyles.inputTitle}>
                            Type
                        </Text>
                        <Picker
                            selectedValue={type_id}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.setState({type_id : value})}
                        >
                            {this.renderType()}
                        </Picker>
                    </View>
                    <Button 
                        title = 'Submit' 
                        containerStyle = {addVehicleStyles.button}
                        buttonStyle = {addVehicleStyles.buttonStyle}
                        titleStyle = {{ fontSize : 20, ...typography.bold}}
                        onPress = {this.onButtonSubmit}
                        loading = {this.props.loading}
                    />
                </View>
            </View>
        )
    }
}

const mapStore = ({vehicleData, register}) => {
    return {
        carBrand : vehicleData.carBrand,
        motorBrand : vehicleData.motorBrand,
        carType : vehicleData.carType,
        motorType : vehicleData.motorType,
        user_id : register.userId,
        loading : register.loading
    }
}

const mapDispatch = () => {
    return {
        getCarBrand, 
        getMotorBrand, 
        getCarTypeById, 
        getMotorTypeById, 
        registerVehicle 
    }
}

export default connect(mapStore, mapDispatch())(AddVehicle)