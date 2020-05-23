import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Seasons from './components/Seasons';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Hello world!</Text>
                <Seasons />
            </View>
        )
    }
}
