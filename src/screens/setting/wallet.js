import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    ScrollView, 
    TouchableWithoutFeedback, 
    TouchableOpacity,
    RefreshControl 
} from 'react-native'
import { Icon } from 'react-native-elements'
import FingerprintScanner from 'react-native-fingerprint-scanner'
import { 
    getHistoryTransaction, 
    topUpSaldo, 
    getSaldo 
} from '../../actions'

// import component
import TopUp from '../../components/topUp'

// import styles
import { colors } from '../../styles'
import { walletStyles } from '../../styles/setting'
import { connect } from 'react-redux'

class Wallet extends React.Component {
    state = {
        show : false,
        fingerprint : false,
        amount : 0,
        password : null,
        refresh : false
    }

    async componentDidMount () {
        this.props.getHistoryTransaction(this.props.account.id)
        // fingerprint check
        try {
            const biometryType =  await FingerprintScanner.isSensorAvailable()
            console.log(biometryType)
            this.setState({ fingerprint : true })
        } catch (err) {
            console.log(err.message || err)
        }
    }

    componentWillUnmount() {
        FingerprintScanner.release();
    }

    onButtonNext = async () => {
        try {
            console.log('next')
            const { fingerprint } = this.state
            if (fingerprint) {
                // authenticate using fingerprint
                const response = await FingerprintScanner.authenticate({
                    description : 'Pay with your fingerprint.'
                })
                console.log('response : ', response)
                if (!response) throw new Error ('invalid fingerprint')
            }
            // do transaction
            console.log('do transaction')
            this.props.topUpSaldo(this.props.account.id, {
                amount : this.state.amount,
                password : this.state.password
            })
            
            this.setState({ show : false })
        } catch(err) {
            console.log(err.message || err)
            this.setState({ show : false })
        }
    }

    onRefresh = () => {
        console.log('on refresh')
        this.setState({refresh : true})
        this.props.getHistoryTransaction(this.props.account.id)
        this.props.getSaldo(this.props.account.id)
        this.setState({refresh : false})
    }

    renderHistory = () => {
        const types = ['Top-Up', 'Pay Parking', 'Send Saldo', 'Admin Fee']
        const statusTypes = ['Success', 'Pending', 'Failed']
        return this.props.history.map(({date, type, amount, status}) => (
            <TouchableOpacity style = {walletStyles.historyList}>
                <View>
                    <Text style ={walletStyles.historyListTitle}>
                        {types[type-1]}
                    </Text>
                    <Text style = {walletStyles.historyListDate}>
                        {date.split('T')[0]}
                    </Text>
                </View>
                <View style = {walletStyles.historyListAmountBox}>
                    <Text style = {walletStyles.historyListAmount}>
                        {`${type == 1 ? '+' : '-'} ${amount}`}
                    </Text>
                    <Text style ={walletStyles.historyListStatus}>
                        {statusTypes[status-1]}
                    </Text>
                </View>
            </TouchableOpacity>
        ))
    }

    render () {
        const { show, fingerprint, amount, password, refresh } = this.state
        // console.log('history : ', this.props.history)
        // console.log('saldo : ', this.props.saldo)
        // console.log('account : ', this.props.account)
        return (
            <View style = {walletStyles.container}>
                <StatusBar backgroundColor = {colors.main.flatRed} barStyle = 'light-content'/>
                <View style = {walletStyles.header}
                >
                    <TouchableWithoutFeedback onPress = { _ => this.props.navigation.goBack()}>
                        <View>
                            <Icon name = 'arrow-back' size = {30} color = {'white'}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text 
                        style = {walletStyles.headerTitle}
                    >
                        Wallet
                    </Text>
                </View>
                <View style = {walletStyles.content}>
                    <View style = {walletStyles.box}></View>
                    <View style = {walletStyles.saldoBox}>
                        <Text style = {walletStyles.saldo}>
                            {`IDR ${this.props.wallet.saldo || 0}`}
                        </Text>
                        <TouchableWithoutFeedback onPress = { _ => this.setState({show : true})}>
                            <View style = {walletStyles.plus}>
                                <Icon name = 'add' size = {35} color = 'white'/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style = {walletStyles.history}>
                        <Text style ={walletStyles.subHeaderTitle}
                        >
                            history
                        </Text>
                        <ScrollView 
                            style = {walletStyles.historyContent}
                            refreshControl = {
                                <RefreshControl refreshing = {refresh} onRefresh = {this.onRefresh}/>
                            }
                        >
                            {this.renderHistory()}
                        </ScrollView>
                    </View>
                </View>
                <TopUp 
                    show = { show } 
                    onPress = { _ => this.onButtonNext()}
                    amount = {amount}
                    password = {password}
                    onChangeAmount = { value => this.setState({ amount : value})}
                    onChangePass = { value => this.setState({ password : value})}
                    passwordInput = {!fingerprint}
                    errorMessage = {this.props.error}
                    loading = {this.props.loading}
                />
            </View>
        )
    }
}

const mapStore = ({ user, wallet }) => {
    return {
        account : user.account,
        wallet : wallet.data,
        history : wallet.history,
        loading : wallet.loading,
        error : wallet.error
    }
}

const mapDispatch = () => {
    return {
        getHistoryTransaction,
        topUpSaldo,
        getSaldo
    }
}

export default connect(mapStore, mapDispatch())(Wallet)