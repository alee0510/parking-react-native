import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

// import component
import Header from '../components/header'

// import styles
import { colors, container, typography } from '../styles'

class History extends React.Component {
    state = {
        iconEdit : false
    }
    render () {
        const { iconEdit } = this.state
        return (
            <View style = {styles.container}>
                {/* HEADER */}
                <View style = {{
                    flexDirection : 'row',
                    paddingHorizontal : 20,
                    paddingVertical : 15,
                    backgroundColor : colors.main.white,
                    alignItems : 'center',
                    ...container.depth(5)
                }}
                >
                    <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
                        <View>
                            <Icon name = 'arrow-back' size = {30} color = {'black'}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text 
                        style = {{
                            ...typography.bold, 
                            fontSize : 28, 
                            marginLeft : 10,
                            flex : 1,
                            color : colors.neutrals.gray220
                        }}
                    >
                        History
                    </Text>
                </View>
                {/* CONTENTS */}
                <ScrollView style = {styles.content}>
                    <TouchableOpacity style = {styles.listContent}>
                        <View>
                            <Text style = {{ fontSize : 16, ...typography.semiBold}}>
                                AEON Mall BSD
                            </Text>
                            <Text style = {{fontSize : 12, ...typography.light}}>
                                Friday, 02 Feb 2020
                            </Text>
                        </View>
                        <View style = {{...container.center}}>
                            <Text style ={{fontSize : 16, ...typography.semiBold}}>
                                2000
                            </Text>
                            <Text style = {{fontSize : 12, ...typography.light}}>
                                1h 30m
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    content : {
        // backgroundColor : 'yellow',
        flex : 1,
        padding : 25
    },
    listContent : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10,
        backgroundColor : 'white',
        borderRadius : 5,
        borderBottomWidth : 0.3,
        borderBottomColor : colors.neutrals.gray220
    }
})

export default History