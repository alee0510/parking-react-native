import React from 'react'
import { connect } from 'react-redux'
import { View, Text , TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Avatar, Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { URL } from '../../helpers/API_URL'
import { initEditProfile, inputEditProfile, editProfile } from '../../actions'

// import component
import Header from '../../components/header'

// import styles
import { colors, container, typography } from '../../styles'
import { profileStyles } from '../../styles/setting'

class Profile extends React.Component {
    state = {
        editIcon : 0,
        inputDisable : true,
    }

    onButtonEdit = () => {
        // init edit profile
        console.log('init edit profile')
        this.props.initEditProfile(this.props.profile)

        // change state
        console.log('change state')
        const { editIcon, inputDisable } = this.state
        this.setState({ editIcon : editIcon ? 0 : 1, inputDisable : !inputDisable },
            _ => {
                if (this.state.inputDisable) {
                    console.log('do edit profile')
                    this.props.editProfile(this.props.tempProfile)
                }
            })
    }

    onButtonBack = () => {
        const { editIcon } = this.state
        this.setState({ editIcon : editIcon ? 0 : 1, inputDisable : true })
    }

    onDatePicked = (date) => {
        const { editIcon } = this.state
        console.log('picked date : ', date)

        // check edit condition
        if (!editIcon) return null
        this.props.inputEditProfile('birthdate', date.split('T')[0])
    }

    render () {
        const { editIcon, inputDisable } = this.state
        const { profile, tempProfile } = this.props
        console.log('profile', profile)
        console.log('edit profile', tempProfile)
        return (
            <View style = {profileStyles.container}>
                <Header
                    title = 'Profile'
                    edit = { editIcon }
                    handleEdit = {this.onButtonEdit}
                    handleBack = { _ => editIcon ? this.onButtonBack() : this.props.navigation.goBack()}
                    loading = {this.props.loading}
                />
                <ScrollView>
                    <View style = {profileStyles.imageContainer}>
                        <View style = {profileStyles.avatar}>
                            {
                                profile ?
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
                                    title = 'A' 
                                    overlayContainerStyle = {{ 
                                        backgroundColor : colors.main.flatRed, 
                                        ...container.depth(5)
                                    }}
                                />

                            }
                            <TouchableOpacity>
                                <View style = {profileStyles.cameraIcon}>
                                    <Icon name = 'camera-alt' color = 'white'/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {profileStyles.input}>
                        <Input
                            label = 'Full name'
                            value = { editIcon ? tempProfile.name : profile.name }
                            disabled = {false}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            disabled = {inputDisable}
                            onChangeText = { value => this.props.inputEditProfile('name', value)}
                        />
                        <Text style ={{
                            fontSize : 16, 
                            ...typography.semiBold,
                            marginHorizontal : 10,
                            marginVertical : 10
                            }}
                        >
                            Birthdate
                        </Text>
                        <DatePicker
                            style={{width: 200}}
                            date={new Date (editIcon ? tempProfile.birthdate : profile.birthdate)}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
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
                            }}
                            onDateChange = { date => this.onDatePicked(date) }
                        />
                        <Input
                            label = 'Phone'
                            value = { editIcon ? tempProfile.phone : profile.phone }
                            disabled = {false}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            disabled = {inputDisable}
                            keyboardType = 'number-pad'
                            onChangeText = { value => this.props.inputEditProfile('phone', value) }
                        />
                        <Input
                            label = 'Address'
                            value = {editIcon ? tempProfile.address : profile.address }
                            disabled = {false}
                            containerStyle = {profileStyles.inputContainer}
                            labelStyle = {profileStyles.label}
                            disabled = {inputDisable}
                            onChangeText = { value => this.props.inputEditProfile('address', value) }
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStore = ({ user, tempProfile }) => {
    return {
        profile : user.profile,
        loading : tempProfile.edit,
        tempProfile : tempProfile
    }
}

const mapDispatch = () => {
    return {
        initEditProfile,
        inputEditProfile,
        editProfile
    }
}

export default connect(mapStore, mapDispatch())(Profile)