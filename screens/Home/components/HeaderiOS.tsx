import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { HomeHeaderStyles } from '../styles';

export default class HomeHeaderiOS extends Component {
    render() {
        return (
            <View
                style={{
                    ...HomeHeaderStyles.container,
                    backgroundColor: '#3c74d7',
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
