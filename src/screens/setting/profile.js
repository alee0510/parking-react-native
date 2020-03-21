import React from 'react'
import { connect } from 'react-redux'
import { View, Text , TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Avatar, Input, Overlay, Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-crop-picker'
import { URL } from '../../helpers/API_URL'
import { editProfile, uploadImage } from '../../actions'

// import component
import Header from '../../components/header'

// import styles
import { colors, container, typography } from '../../styles'
import { profileStyles } from '../../styles/setting'

class Profile extends React.Component {
    state = {
        iconEdit : 0,
        disableInput : true,
        name : '',
        birthdate : '',
        phone : '',
        address : '',
        visible : false
    }

    onButtonEdit = () => {
        const { iconEdit } = this.state
        // initialize edit state
        if (!iconEdit) {
            return this.setState({
                name : this.props.profile.name,
                birthdate : this.props.profile.birthdate,
                phone : this.props.profile.phone,
                address : this.props.profile.address,
                iconEdit : 1,
                disableInput : false
            })
        }
        this.setState({
            iconEdit : 0,
            disableInput : true
        },
        _ => {
            console.log('save')
            console.log('do request edit profil')
            this.props.editProfile({
                name : this.state.name,
                birthdate : this.state.birthdate,
                phone : this.state.phone,
                address : this.state.address
            })
        }
        )
    }

    onButtonCancel = () => {
        this.setState({
            iconEdit : 0,
            disableInput : true,
            name : '',
            birthdate : '',
            phone : '',
            address : ''
        })
    }

    onDatePicked = (date) => {
        console.log('picked date : ', date)

        // check edit condition
        if (!this.state.iconEdit) return null
        this.setState({ birthdate : date.split('T')[0]})
    }

    onButtonCamera = () => {
        console.log('edit profile')
    }
    onButtonOpenCamera = () => {
        ImagePicker.openCamera({
            width: 700,
            height: 700,
            cropping: true,
            mediaType: 'photo'
        }).then(image => {
            console.log('image', image)
            this.setState({ visible: false })
            this.props.uploadImage(image)
        }).catch(err => {
            console.log(err)
        })
    }

    onButtonOpenGallery = () => {
        ImagePicker.openPicker({
            width: 700,
            height: 700,
            cropping: true,
            mediaType: 'photo'
        }).then(image => {
            console.log('image', image)
            this.setState({ visible: false })
            this.props.uploadImage(image)
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
        // get variable
        const { iconEdit, disableInput, name, birthdate, phone, address, visible } = this.state
        const { profile  } = this.props

        // date picker style
        const datePickerStyle = {
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 10
            },
            dateInput: {
                marginLeft: 0,
                borderWidth : 0
            }
        }

        return (
            <View style = {profileStyles.container}>
                <Header
                    title = 'Profile'
                    edit = { iconEdit }
                    handleEdit = {this.onButtonEdit}
                    handleBack = { _ => iconEdit ? this.onButtonCancel() : this.props.navigation.goBack()}
                    loading = {this.props.loading}
                />
                <ScrollView>
                    <View style = {profileStyles.imageContainer}>
                        <View style = {profileStyles.avatar}>
                            {
                                profile ? profile.image ?
                                <Avatar
                                    rounded
                                    size = {125}
                                    source = {{uri : URL + '/' + profile.image}}
                                    overlayContainerStyle = {{ ...container.depth(5) }}
                                />
                                :
                                <Avatar 
                                    rounded 
                                    size = {125} 
                                    title = {profile.name.split('')[0].toUpperCase()} 
                                    overlayContainerStyle = {{ 
                                        backgroundColor : colors.main.flatRed, 
                                        ...container.depth(5)
                                    }}
                                />
                                : null
                            }
                            <Button 
                                icon = {{ name: "camera-alt", size: 20, color: "white"}}
                                buttonStyle = {profileStyles.cameraIcon}
                                iconContainerStyle = {profileStyles.buttonStyle}
                                onPress = { _ => this.setState({visible : true})}
                                // loading = {true}
                            />
                        </View>
                    </View>
                    <View style = {profileStyles.input}>
                        <Input
                            label = 'Full name'
                            value = { iconEdit ? name : profile.name }
                            disabled = {disableInput}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            onChangeText = { value => this.setState({ name : value })}
                        />
                        <Text style ={{
                            fontSize : 15, 
                            ...typography.bold,
                            marginHorizontal : 10,
                            marginVertical : 10
                            }}
                        >
                            Birthdate
                        </Text>
                        <DatePicker
                            style = {{width: 200}}
                            date = {
                                iconEdit ? new Date(birthdate || Date.now())
                                : new Date(profile.birthdate)
                            }
                            mode = "date"
                            placeholder = "select date"
                            format = "YYYY-MM-DD"
                            minDate = "1990-01-01"
                            maxDate = "2020-03-21"
                            confirmBtnText = "Confirm"
                            cancelBtnText = "Cancel"
                            customStyles = {datePickerStyle}
                            onDateChange = { date => this.onDatePicked(date) }
                        />
                        <Input
                            label = 'Phone'
                            value = { iconEdit ? phone : profile.phone }
                            disabled = {disableInput}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            keyboardType = 'number-pad'
                            onChangeText = { value => this.setState({ phone : value })}
                        />
                        <Input
                            label = 'Address'
                            value = {iconEdit ? address : profile.address }
                            disabled = {disableInput}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            onChangeText = { value => this.setState({ address : value }) }
                        /> 
                    </View>
                </ScrollView>
                <Overlay
                    isVisible = {visible}
                    height = {'auto'}
                    onBackdropPress = { _ => this.setState({visible : false})}
                    overlayStyle ={profileStyles.overlayStyle}
                >
                    <View>
                        <TouchableOpacity
                            style = {profileStyles.optionsContainer}
                            onPress = {this.onButtonOpenCamera}
                        >
                            <Icon name = 'camera-alt' size = {30}/>
                            <Text style ={profileStyles.optionsTitle}>
                                Open camera
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style = {profileStyles.optionsContainer}
                            onPress = {this.onButtonOpenGallery}
                        >
                            <Icon name = 'google-photos' type = 'material-community' size = {30}/>
                            <Text style ={profileStyles.optionsTitle}>
                                Select from gallery
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
            </View>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        profile : user.profile,
        loading : user.loading
    }
}

const mapDispatch = () => {
    return {
        editProfile,
        uploadImage
    }
}

export default connect(mapStore, mapDispatch())(Profile)