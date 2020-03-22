import React from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    StatusBar, 
    ScrollView, 
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
    RefreshControl
} from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'
import { URL } from '../../helpers/API_URL'

// import actions
import { 
    getNews, 
    getProfile, 
    getSaldo, 
    getVehicle,
    giveRating 
} from '../../actions'

// import style
import { colors, typography, container } from '../../styles'
import { feedStyles } from '../../styles/feed'

// import components
import FeedCard from '../../components/feedCard'
import Ratings from '../../components/rating'

// import icon
import Medal from '../../assets/medal.svg'

class Feed extends React.Component {
    state = {
        refresh : false,
        reviews : '',
        rate : 0
    }

    async componentDidMount () {
        const id = this.props.account ? this.props.account.id : 0
        console.log('user id : ', id)
        this.props.getNews()
        this.props.getProfile(id)
        this.props.getSaldo(id)
        this.props.getVehicle(id)
    }

    onRefresh = () => {
        console.log('on refresh')
        this.setState({ refresh : true })
        this.props.getNews()
        this.props.getSaldo(this.props.account.id)
        this.setState({ refresh : false })
    }

    onButtonRating = () => {
        const {reviews, rate} = this.state
        this.props.giveRating({
            area_id : this.props.areaId,
            user_id : this.props.account.id,
            rating : rate,
            message : reviews
        })
        
    }

    renderNews = () => {
        return this.props.news.map((item, index) => {
            return (
                <TouchableWithoutFeedback key = {index} onPress = {() => this.props.navigation.navigate('Web-View', {url : item.url})}>
                    <View style = {{
                        flex : 1, 
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
        const { refresh, rate, reviews } = this.state
        const { navigation, profile, account, wallet } = this.props
        console.log('area id : ', this.props.areaId)
        console.log('reviews', reviews)
        console.log('rate', rate)
        console.log('rating', this.props.rating)

        return (
            <View style = {feedStyles.container}>
                <StatusBar backgroundColor = {colors.neutrals.gray10} barStyle = 'dark-content'/>
                <Header
                    leftComponent = {() => (
                        <View style = {feedStyles.headerLeft}>
                            {
                                profile ? profile.image ? 
                                <Avatar
                                    rounded
                                    source = {{ uri : URL + '/' + profile.image}}
                                    size = {60}
                                    overlayContainerStyle = {{...container.depth(1)}}
                                />
                                :
                                <Avatar 
                                    rounded 
                                    title= {profile.name.split('')[0].toUpperCase()} 
                                    size = {60} 
                                    overlayContainerStyle = {{ backgroundColor : colors.main.flatRed}}
                                />
                                : null
                            }
                            <View style = {feedStyles.headerCenter}>
                                <Text style = {{ fontSize : 24, ...typography.bold}}>
                                    Hello,
                                </Text>
                                <Text style = {{ fontSize : 16, ...typography.regular}}>
                                    {account ? account.username : 'username'}
                                </Text>
                            </View>
                        </View>
                    )}
                    rightComponent={() => (
                        <TouchableOpacity onPress = { _ => this.props.navigation.navigate('Notification')}>
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
                <ScrollView 
                    style = {{flex : 1, paddingHorizontal : 15}}
                    refreshControl = {
                        <RefreshControl refreshing = {refresh} onRefresh = {this.onRefresh}/>
                    }
                >
                    <View style = {feedStyles.card}>
                        <FeedCard saldo = {wallet ? wallet.saldo : 0} fullname = {profile ? profile.name : null}/>
                    </View>
                    <Text style = {feedStyles.feturesTitle}>
                        Features
                    </Text>
                    <View style = {feedStyles.menu}>
                        <TouchableWithoutFeedback onPress = { _ => navigation.navigate('Map')} >
                            <View style = {feedStyles.menuIcon}>
                                <Icon name = 'map-marker' 
                                    type = 'material-community'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style = {feedStyles.menuIcon}>
                            <View style = {feedStyles.menuIcon}>
                                <Icon name = 'clockcircle' 
                                    type = 'antdesign'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback  onPress = { _ => navigation.navigate('Setting-Navigation', { screen : 'Wallet'})}>
                            <View style = {feedStyles.menuIcon}>
                                <Icon name = 'wallet' 
                                    type = 'entypo'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback >
                        <TouchableWithoutFeedback onPress = { _ => navigation.navigate('Setting-Navigation', { screen : 'Vehicle'})} >
                            <View style = {feedStyles.menuIcon}>
                                <Icon name = 'ios-car' 
                                    type = 'ionicon'
                                    size = {40}
                                    color = {colors.main.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style = {feedStyles.menuIcon}>
                            <View style = {feedStyles.menuIcon}>
                                <Medal height = {40} width = {40} fill = {colors.main.white}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style = {feedStyles.storiesTitle}>
                        Stories
                    </Text>
                    <View style = {feedStyles.news}>
                        {this.renderNews()}
                    </View>
                </ScrollView>
                <Ratings
                    show = {this.props.rating}
                    reviews = {reviews}
                    onChangeText = { value => this.setState({reviews : value}) }
                    onFinishRating = { rating => this.setState({rate : rating}) }
                    onPress = {this.props.onButtonRating}
                    loading = {this.props.loading}
                />
            </View>
        )
    }
}

const mapStore = ({ news, user, wallet, parking }) => {
    return {
        news : news.data,
        account : user.account,
        profile : user.profile,
        wallet : wallet.data,
        rating : parking.rating,
        areaId : parking.id,
        loading : parking.loading
    }
}

const mapDispatch = () => {
    return {
        getNews,
        getProfile,
        getSaldo,
        getVehicle,
        giveRating
    }
}

export default connect(mapStore, mapDispatch())(Feed)