import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class Hello extends React.Component {
    render() {
        let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg' };
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.hello}>Hello World</Text>
                <Image source={pic} style={{width: 200, height: 200}}/>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    hello: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
});