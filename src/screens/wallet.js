import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'

// import component
import Header from '../components/header'

// import styles
import { colors, typography, container } from '../styles'

class Wallet extends React.Component {
    state = {
        iconEdit : false
    }
    render () {
        const { iconEdit } = this.state
        return (
            <View style = {styles.container}>
                <StatusBar backgroundColor = {colors.main.flatRed} barStyle = 'light-content'/>
                <View style = {{
                    flexDirection : 'row',
                    paddingHorizontal : 20,
                    paddingVertical : 15,
                    backgroundColor : colors.main.flatRed,
                    alignItems : 'center',
                    // ...container.depth(5)
                }}
                >
                    <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
                        <View>
                            <Icon name = 'arrow-back' size = {30} color = {'white'}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text 
                        style = {{
                            ...typography.bold, 
                            fontSize : 28, 
                            marginLeft : 10,
                            flex : 1,
                            color : colors.main.white
                        }}
                    >
                        Wallet
                    </Text>
                </View>
                <View style = {styles.content}>
                    <View style = {styles.box}></View>
                    <View style = {styles.saldoBox}>
                        <Text style = {{fontSize : 42, ...typography.bold, color : colors.neutrals.gray150}}>
                            IDR 1000
                        </Text>
                        <TouchableOpacity>
                            <View style = {styles.plus}>
                                <Icon name = 'add' size = {35} color = 'white'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.history}>
                        <Text style ={{
                            with : '100%', 
                            padding : 5, 
                            // backgroundColor : 'pink',
                            fontSize : 20,
                            ...typography.semiBold,
                            textTransform : 'capitalize'
                            }}
                        >
                            history
                        </Text>
                        <ScrollView style = {styles.historyContent}>
                            <TouchableOpacity style = {styles.historyList}>
                                <View>
                                    <Text style ={{fontSize : 16, ...typography.semiBold}}>To Up</Text>
                                    <Text style = {{fontSize : 12, ...typography.light}}>Friday, 15th Oct 2019</Text>
                                </View>
                                <Text style = {{ fontSize : 16, ...typography.semiBold}}>+5000</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.historyList}>
                                <View>
                                    <Text style ={{fontSize : 16, ...typography.semiBold}}>To Up</Text>
                                    <Text style = {{fontSize : 12, ...typography.light}}>Friday, 15th Oct 2019</Text>
                                </View>
                                <Text style = {{ fontSize : 16, ...typography.semiBold}}>+5000</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.historyList}>
                                <View>
                                    <Text style ={{fontSize : 16, ...typography.semiBold}}>To Up</Text>
                                    <Text style = {{fontSize : 12, ...typography.light}}>Friday, 15th Oct 2019</Text>
                                </View>
                                <Text style = {{ fontSize : 16, ...typography.semiBold}}>+5000</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        position : 'relative'
    },
    content : {
        flex : 1,
        // backgroundColor : 'yellow',
        alignItems : 'center'
    },
    box : {
        width : '100%',
        height : '15%',
        backgroundColor : colors.main.flatRed
    },
    saldoBox : {
        width : '80%',
        height : 100,
        backgroundColor : colors.main.white,
        position : 'absolute',
        top : '7%',
        zIndex : 5,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 30,
        borderRadius : 15,
        ...container.depth(4)
    },
    history : {
        width : '100%',
        flex : 1,
        // backgroundColor : 'tomato',
        marginTop : '15%',
        paddingHorizontal : 25,
        paddingVertical : 10
    },
    historyContent : {
        flex : 1,
        marginTop : 10,
        // backgroundColor : 'pink'
        
    },
    historyList : {
        width : '100%',
        borderBottomWidth : 0.3,
        borderBottomColor : colors.neutrals.gray220,
        backgroundColor : colors.neutrals.gray10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 10,
        paddingVertical : 5
    },
    plus : {
        height : 40, width : 40,
        borderRadius : 20,
        backgroundColor : colors.main.flatRed,
        ...container.depth(4),
        ...container.center
    }
})

export default Wallet