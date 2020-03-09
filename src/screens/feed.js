import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

// import style
import { colors, typography, container } from '../styles'

// import components
import FeedCard from '../components/feedCard'

// import icon
import Discount from '../assets/discount.svg'
import Medal from '../assets/medal.svg'

class Feed extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <StatusBar backgroundColor = {colors.neutrals.gray10} barStyle = 'dark-content'/>
                <Header
                    leftComponent = {() => (
                        <View style = {styles.headerLeft}>
                            <Avatar 
                                rounded 
                                title="A" 
                                size = {60} 
                                overlayContainerStyle = {{ backgroundColor : colors.main.flatRed}}
                            />
                            <View style = {{ marginLeft : 10, height : '100%',...container.center}}>
                                <Text style = {{ fontSize : 24, ...typography.bold}}>
                                    Hello,
                                </Text>
                                <Text style = {{ fontSize : 16, ...typography.regular}}>
                                    alee0510
                                </Text>
                            </View>
                        </View>
                    )}
                    rightComponent={() => (
                        <View style = {{ height : '100%', ...container.center}}>
                            <Icon name = 'notifications' size = {37} color = {colors.main.flatRed}/>
                        </View>
                    )}
                    containerStyle = {{
                        backgroundColor : colors.neutrals.gray10,
                        paddingTop : 0,
                        height : 100
                    }}
                />
                <ScrollView style = {{ 
                    flex : 1, 
                    // backgroundColor : 'pink', 
                    paddingHorizontal : 15
                }}>
                    <View style = {styles.card}>
                        <FeedCard/>
                    </View>
                    <Text style = {{ fontSize : 24, ...typography.bold, marginVertical : 10}}>
                        Feature
                    </Text>
                    <View style = {styles.menu}>
                        <TouchableWithoutFeedback >
                            <View style = {styles.menuIcon}>
                                <Icon name = 'map-marker' 
                                    type = 'material-community'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style = {styles.menuIcon}>
                            <View style = {styles.menuIcon}>
                                <Icon name = 'clockcircle' 
                                    type = 'antdesign'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                            <View style = {styles.menuIcon}>
                                <Icon name = 'wallet' 
                                    type = 'entypo'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style = {styles.menuIcon}>
                            <View style = {styles.menuIcon}>
                                <Medal height = {40} width = {40} fill = {colors.main.white}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style = {styles.menuIcon}>
                                <Discount height = {40} width = {450} fill = {colors.main.white}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor : colors.neutrals.gray10,
    },
    headerLeft : {
        height : '100%',
        // backgroundColor : 'pink',
        flexDirection : 'row',
        alignItems : 'center'
    },
    card : {
        height : 300,
        // marginHorizontal : 15,
        borderRadius : 15,
        overflow : 'hidden',
        ...container.depth(5)
    },
    menu : {
        width : '100%',
        // backgroundColor : 'yellow',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignContent : 'center'
    },
    menuIcon : {
        height : 80,
        width : 80,
        backgroundColor : colors.main.flatRed,
        ...container.center,
        borderRadius : 20,
        marginVertical : 10,
        ...container.depth(3)
    }
})

export default Feed