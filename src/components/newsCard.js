import React from 'react'
import {} from 'react-native'
import { Card, Text, Button} from 'react-native-elements'

const News = (props) => {
    console.log(props.data)
    return props.data.map((item, index) => (
        <Card
            title={item.title}
            image={{ uri : images}}
            key = {index}
        >
            <Text style={{marginBottom: 10}}>
                {item.description}
            </Text>
            {/* <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW'
            /> */}
        </Card>
    ))
}

export default News