import React from 'react'
import { View, Text, StyleSheet, Image, Overlay } from 'react-native'
import { Icon, Button } from 'react-native-elements'

// import logo
import Logo from '../assets/parking_app.svg'

// import styles
import { colors, typography} from '../styles'

class Payment extends React.Component {
    render () {
        const date = new Date()
        return (
            <View style = {styles.container}>
                <View style = {styles.receiptContainer}>
                    <View style = {styles.logoContainer}>
                        <Logo height = {100} width = {100}/>
                    </View>
                    <View style = {styles.content}>
                        <Text style = {{fontSize : 20, ...typography.bold, textAlign : 'center', paddingVertical : 20}}>
                            Trancation Receipt
                        </Text>
                        <View style = {{margin : 20}}>
                            <Text style ={styles.text}>
                                Duration : 300m
                            </Text>
                            <Text style ={styles.text}>
                                Date : {date.toLocaleDateString()}
                                </Text>
                            <Text style ={styles.text}>
                                Place : AEON MALL
                            </Text>
                            <Text style ={styles.text}>
                                Total : 1000
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.imageContainer}>
                        <Image source = {require('../assets/barcode.png')} />
                    </View>
                </View>
                <Button
                    icon = {<Icon name="dollar" type = 'font-awesome' size={15} color="white"/>}
                    title="Pay"
                    buttonStyle = {{
                        height : 50,
                        borderRadius : 10,
                        backgroundColor : colors.main.green
                    }}
                    iconContainerStyle = {{margin : 20}}
                    containerStyle = {{marginVertical : 15}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 30
    },
    receiptContainer : {
        height : '90%',
        backgroundColor : colors.main.white,
        alignItems : 'center',
        borderRadius : 10,
        padding : 50
    },
    logoContainer : {
        width : 'auto',
    },
    imageContainer : {
        position : 'absolute',
        bottom : 30
    },
    content : {
        width : '100%',
        marginVertical : 20
    },
    text : {
        paddingVertical : 5
    }
})
export default Payment