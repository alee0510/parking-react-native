import React from 'react'
import { connect } from 'react-redux'
import { View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    ScrollView, 
    TouchableWithoutFeedback,
    Image,
    Linking,
    TouchableOpacity
} from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

// import actions
import { getNews } from '../actions'

// import style
import { colors, typography, container } from '../styles'

// import components
import FeedCard from '../components/feedCard'

// import icon
import Medal from '../assets/medal.svg'
import Ratings from '../components/rating'

class Feed extends React.Component {
    componentDidMount () {
        this.props.getNews()
    }

    hanldeNews = (url) => {
        Linking.openURL(url)
        .catch(err => console.log(err))
    }

    renderNews = () => {
        return this.props.news.map((item, index) => {
            return (
                <TouchableWithoutFeedback key = {index} onPress = {() => this.hanldeNews(item.url)}>
                    <View style = {{
                        flex : 1, 
                        // backgroundColor : 'yellow', 
                        marginBottom : 20,
                        borderRadius : 15,
                        overflow : 'hidden',
                        ...container.depth(4)
                    }}>
                        <View style = {{ backgroundColor : colors.main.white, padding : 10}}>
                            <Text style = {{fontSize : 18, ...typography.bold}}>
                                {item.title}
                            </Text>
                        </View>
                        <Image source = {{uri : item.urlToImage}} style = {{ width : '100%', height : 200}}/>
                        <View style = {{flex : 1, backgroundColor : colors.main.white}}>
                            <Text style = {{ padding : 10, fontSize : 14, ...typography.regular}}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    render () {
        // console.log(this.props.news)
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
                            <View style = {{ marginLeft : 10, height : '100%', width : '100%', justifyContent : 'center'}}>
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
                        <TouchableOpacity onPress = { _ => this.props.navigation.navigate('notification')}>
                            <View style = {{ height : '100%', ...container.center}}>
                                <Icon name = 'notifications' size = {37} color = {colors.main.flatRed}/>
                            </View>
                        </TouchableOpacity>
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
                    <Text style = {{ fontSize : 24, ...typography.bold, marginTop : 20}}>
                        Features
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
                        <TouchableWithoutFeedback >
                            <View style = {styles.menuIcon}>
                                <Icon name = 'ios-car' 
                                    type = 'ionicon'
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
                    </View>
                    <Text style = {{ fontSize : 24, ...typography.bold, marginVertical : 15}}>
                        Stories
                    </Text>
                    <View style = {styles.news}>
                        {this.renderNews()}
                    </View>
                </ScrollView>
                {/* <Ratings show  = {true}/> */}
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
        height : 65,
        width : 65,
        backgroundColor : colors.main.flatRed,
        ...container.center,
        borderRadius : 20,
        marginVertical : 15,
        // margin : 3,
        // marginHorizontal : 4,
        ...container.depth(4)
    },
    news : {
        width : '100%',
        // backgroundColor : 'red',
    }
})

const mapStore = ({ news }) => {
    return {
        news : news.data
    }
}

const mapDispatch = () => {
    return {
        getNews
    }
}

export default connect(mapStore, mapDispatch())(Feed)