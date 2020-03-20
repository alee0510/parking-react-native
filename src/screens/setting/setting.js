import React from 'react'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { URL } from '../../helpers/API_URL'

// import styles
import { colors, typography, container } from '../../styles'
import { settingStyles } from '../../styles/setting'

// import actions
import { LogOut } from '../../actions'
import AsyncStorage from '@react-native-community/async-storage'

class Setting extends React.Component {
    onButtonLogOut = async () => {
        await AsyncStorage.clear()
        if (!await AsyncStorage.getItem('token')) {
            this.props.LogOut()
            console.log('no token => log out')
            this.props.navigation.dispatch(CommonActions.reset({
                index : 0,
                routes : [{ name : 'Login'}]
            }))

        }
    }

    render () {
        const { navigation, account, profile } = this.props
        return (
            <View style = {settingStyles.container}>
                <Text style = {settingStyles.title}>Settings</Text>
                <ScrollView style = {{flex : 1}}>
                    <View style = {settingStyles.accountContainer}>
                        {
                            profile ? 
                            <Avatar
                                rounded
                                size = {50}
                                source = {{ uri : URL + '/' + profile.image}}
                                overlayContainerStyle = {{ ...container.depth(1)}}
                            />
                            :
                            <Avatar 
                                rounded 
                                size = {50} 
                                title = 'A' 
                                overlayContainerStyle = {{ backgroundColor : colors.main.flatRed}}
                            />

                        }
                        <View 
                            style ={{ 
                                flex : 1, 
                                justifyContent : 'center',
                                marginLeft : 10
                            }}
                        >
                            <Text 
                                style = {{
                                    fontSize : 20, 
                                    textTransform : 'capitalize', 
                                    ...typography.semiBold
                                }}
                            >
                                {profile ? profile.name : 'full name'}
                            </Text>
                            <Text>{profile ? profile.phone : '+620011112222'}</Text>
                        </View>
                        <TouchableWithoutFeedback onPress = { _ => navigation.navigate('Profile')}>
                            <View>
                                <Icon name = 'edit'/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style = {settingStyles.settings}>
                        <View style = {settingStyles.subSetting}>
                            <Text style = {{ fontSize : 18, ...typography.bold, paddingVertical : 8 }}>
                                Account
                            </Text>
                            <TouchableOpacity onPress = { _ => navigation.navigate('Username')}>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'account' type = 'material-community' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>username</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { _ => navigation.navigate('Password')}>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'lock' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>password</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { _ => navigation.navigate('Vehicle')}>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'ios-car' type = 'ionicon' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>vehicle</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { _ => navigation.navigate('Wallet')}>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'account-balance-wallet' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>wallet</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { _ => navigation.navigate('History')}>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'history' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>history</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {settingStyles.subSetting}>
                            <Text style = {{ fontSize : 18, ...typography.bold, paddingVertical : 8 }}>
                                Info
                            </Text>
                            <TouchableOpacity>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'help' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>Help</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {settingStyles.options}>
                                    <Icon name = 'info' size = {25}/>
                                    <Text style = {settingStyles.optionsText}>About</Text>
                                    <Icon name = 'navigate-next'/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress = {this.onButtonLogOut}>
                        <View style = {settingStyles.logOutButtonContainer}>
                            <View style = {settingStyles.logOutButton}>
                                <Text style = {{
                                    fontSize : 20,
                                    ...typography.semiBold,
                                    color : colors.main.white,
                                    textAlign : 'center'
                                }}>
                                    Log out
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }
}

const mapStore = ({ user, wallet }) => {
    return {
        account : user.account,
        profile : user.profile,
        wallet : wallet.data
    }
}

export default connect(mapStore, { LogOut })(Setting)