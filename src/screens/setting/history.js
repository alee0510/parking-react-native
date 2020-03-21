import React from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    ScrollView, 
    TouchableOpacity,
    RefreshControl 
} from 'react-native'
import { Icon } from 'react-native-elements'
import { getHistory } from '../../actions'

// import styles
import { container } from '../../styles'
import { historyStyles } from '../../styles/setting'

class History extends React.Component {
    state = {
        refresh : false
    }

    componentDidMount () {
        this.props.getHistory(this.props.account.id)
    }

    onRefresh = () => {
        this.setState({refresh : true})
        console.log('on refresh')
        this.props.getHistory(this.props.account.id)
        this.setState({refresh : false})
    }

    renderHistory = () => {
        return this.props.history.map(({place_name, leave_date, duration, total_cost}) => {
            let hours = Math.floor(duration/60)
            let minutes = duration - (hours*60)
            return <TouchableOpacity style = {historyStyles.listContent}>
                        <View>
                            <Text style = {historyStyles.listPlace}>
                                {place_name}
                            </Text>
                            <Text style = {historyStyles.listDate}>
                                {new Date(leave_date).toLocaleDateString()}
                            </Text>
                        </View>
                        <View style = {{...container.center}}>
                            <Text style ={historyStyles.listAmount}>
                                {`- ${total_cost}`}
                            </Text>
                            <Text style = {historyStyles.listDuration}>
                                {`${hours}h ${minutes}m`}
                            </Text>
                        </View>
                    </TouchableOpacity>
            
        })
    }
    render () {
        const { refresh } = this.state
        console.log('history : ', this.props.history)

        return (
            <View style = {historyStyles.container}>
                {/* HEADER */}
                <View style = {historyStyles.header}
                >
                    <TouchableOpacity onPress = { _ => this.props.navigation.goBack()}>
                        <View>
                            <Icon name = 'arrow-back' size = {30} color = {'black'}/>
                        </View>
                    </TouchableOpacity>
                    <Text 
                        style = {historyStyles.headerTitle}
                    >
                        History
                    </Text>
                </View>
                {/* CONTENTS */}
                <ScrollView 
                    style = {historyStyles.content}
                    refreshControl = {
                        <RefreshControl refreshing = {refresh} onRefresh = {this.onRefresh}/>
                    }
                >
                    {this.renderHistory()}
                </ScrollView>
            </View>
        )
    }
}

const mapStore = ({ user, history }) => {
    return {
        account : user.account,
        history : history.data
    }
}

export default connect(mapStore, { getHistory })(History)