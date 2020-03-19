import React from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

// import style
import { colors, container, typography } from '../../styles'

class AddVehicle extends React.Component {
    state = {
        police : null,
        type : 0,
        brand : 0,
        brandName : 0
    }
    render () {
        const { type, police, brand, brandName } = this.state
        const { navigation } = this.props
        return (
            <View style = {styles.container}>
                <View style = {{width : '80%'}}>
                    <Text style = {styles.title}>Add your Vehicle Info</Text>
                </View>
                <View style = {{ marginVertical : 20 }}>
                    <Input
                        label = 'Police No'
                        value = {police}
                        disabled = {false}
                        labelStyle = {styles.label}
                        containerStyle = {{...container.depth(4), marginVertical : '5%'}}
                        inputContainerStyle = {styles.inputContainerStyle}
                        inputStyle = {{marginLeft : 5}}
                        leftIcon={
                            <Icon name='ios-car' type = 'ionicon' size={24} color='black'/>
                        }
                        onChange = { (e) => this.setState({police : e.target.value})}
                    />
                    <View style = {styles.typeBox}>
                        <Text style = {{ fontSize : 16, ...typography.bold, marginRight : 10}}>
                            Vehicle type
                        </Text>
                        <Picker
                            selectedValue={type}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.setState({ type : value })}
                        >
                            <Picker.Item label = 'All' value = {0}/>
                            <Picker.Item label = "Car" value={1}/>
                            <Picker.Item label = "Motorcycle" value={2}/>
                        </Picker>
                    </View>
                    <View style = {styles.typeBox}>
                        <Text style = {{ fontSize : 16, ...typography.bold, marginRight : 10}}>
                            Brand
                        </Text>
                        <Picker
                            selectedValue={type}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.setState({ type : value })}
                        >
                            <Picker.Item label = 'All' value = {0}/>
                            <Picker.Item label = "Car" value={1}/>
                            <Picker.Item label = "Motorcycle" value={2}/>
                        </Picker>
                    </View>
                    <View style = {styles.typeBox}>
                        <Text style = {{ fontSize : 16, ...typography.bold, marginRight : 10}}>
                            Brand Name
                        </Text>
                        <Picker
                            selectedValue={type}
                            style={{height: 50, width: 150}}
                            onValueChange = { value => this.setState({ type : value })}
                        >
                            <Picker.Item label = 'All' value = {0}/>
                            <Picker.Item label = "Car" value={1}/>
                            <Picker.Item label = "Motorcycle" value={2}/>
                        </Picker>
                    </View>
                    <Button 
                        title = 'Submit' 
                        containerStyle = {styles.button}
                        buttonStyle = {styles.buttonStyle}
                        titleStyle = {{ fontSize : 20, ...typography.bold}}
                        onPress = { _ => navigation.navigate('sent-otp')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray20,
        paddingHorizontal : '8%',
        paddingVertical : '20%'
    },
    title : {
        fontSize : 32,
        ...typography.bold
    },
    typeBox : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 15,
        justifyContent : 'space-between'
    },
    inputContainerStyle : {
        backgroundColor : colors.main.white,
        borderWidth : 0,
        borderColor : colors.neutrals.gray220,
        borderRadius : 50,
        overflow : 'hidden',
        borderBottomWidth : 0,
        ...container.depth(4),
        marginVertical : 8
    },
    label : {
        ...typography.semiBold, 
        color : 'black',
        paddingVertical : 2
    },
    button : {
        marginTop : '10%',
        marginHorizontal : '10%'
    },
    buttonStyle : {
        borderRadius : 50,
        backgroundColor : colors.main.flatRed,
        fontSize : 20
    },
})

export default AddVehicle