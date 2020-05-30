import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { HomeHeaderStyles } from '../styles';

export default class HomeHeaderAndroid extends Component {
    render() {
        return (
            <View
                style={{
                    ...HomeHeaderStyles.container,
                    backgroundColor: '#93bb3a',
                }}
            >
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/F1.png')}
                    style={HomeHeaderStyles.img}
                />
            </View>
        );
    }
}
