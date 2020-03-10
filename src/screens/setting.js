import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Icon, Button } from 'react-native-elements'

// import styles
import { colors, typography, container } from '../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

class Setting extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>Settings</Text>
                <View style = {styles.accountContainer}>
                    <Avatar 
                        rounded 
                        size = {50} 
                        title = 'A' 
                        overlayContainerStyle = {{ backgroundColor : colors.main.flatRed}}
                    />
                    <View 
                        style ={{ 
                            flex : 1, 
                            // backgroundColor : 'pink', 
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
                                full name
                        </Text>
                        <Text>+6285722286349</Text>
                    </View>
                    <TouchableWithoutFeedback>
                        <View>
                            <Icon name = 'edit'/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style = {styles.settings}>
                    <View style = {styles.subSetting}>
                        <Text style = {{ fontSize : 18, ...typography.bold, paddingVertical : 8 }}>
                            Account
                        </Text>
                        <View style = {styles.options}>
                            <Icon name = 'account' type = 'material-community' size = {25}/>
                            <Text style = {styles.optionsText}>username</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                        <View style = {styles.options}>
                            <Icon name = 'lock' size = {25}/>
                            <Text style = {styles.optionsText}>password</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                        <View style = {styles.options}>
                            <Icon name = 'history' size = {25}/>
                            <Text style = {styles.optionsText}>history</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                        <View style = {styles.options}>
                            <Icon name = 'account-balance-wallet' size = {25}/>
                            <Text style = {styles.optionsText}>wallet</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                    </View>
                    <View style = {styles.subSetting}>
                        <Text style = {{ fontSize : 18, ...typography.bold, paddingVertical : 8 }}>
                            Info
                        </Text>
                        <View style = {styles.options}>
                            <Icon name = 'help' size = {25}/>
                            <Text style = {styles.optionsText}>Help</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                        <View style = {styles.options}>
                            <Icon name = 'info' size = {25}/>
                            <Text style = {styles.optionsText}>About</Text>
                            <Icon name = 'navigate-next'/>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback>
                    <View style = {styles.logOutButton}>
                        <Icon name = 'exit-to-app' size = {30} color = {colors.main.white}/>
                        <Text style = {{
                            fontSize : 20,
                            ...typography.semiBold,
                            marginLeft : 10,
                            color : colors.main.white,
                            // flex : 1,
                            textAlign : 'center'
                        }}>
                            Log out
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10
    },
    title : {
        fontSize : 28,
        ...typography.bold,
        width : '100%',
        paddingHorizontal : 20,
        paddingVertical : 15,
        // backgroundColor : 'pink'
    },
    accountContainer : {
        width : '100%',
        paddingHorizontal : 25,
        paddingVertical : 15,
        // backgroundColor : 'yellow',
        flexDirection : 'row',
        alignItems : 'center'
    },
    settings : {
        // flex : 1,
        paddingHorizontal : 30,
        // paddingVertical : 0,
        // backgroundColor : 'green'
    },
    subSetting : {
        // backgroundColor : 'red',
        marginVertical : 15
    },
    options : {
        flexDirection : 'row',
        alignItems : 'center',
        // backgroundColor : 'yellow',
        borderBottomWidth : 0.5,
        borderBottomColor : colors.neutrals.gray150,
        paddingVertical : 10
    },
    optionsText : {
        flex : 1,
        paddingLeft : 8,
        fontSize : 16,
        textTransform : 'capitalize',
        ...typography.regular
    },
    logOutButton : {
        paddingVertical : 8,
        paddingHorizontal : 15,
        // height : 50,
        backgroundColor : colors.main.flatRed,
        flexDirection : 'row',
        marginHorizontal : '20%',
        marginTop : 10,
        borderRadius : 50,
        // justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Setting