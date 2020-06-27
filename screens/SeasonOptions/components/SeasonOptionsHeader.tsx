import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { StackHeaderTitleProps } from '@react-navigation/stack';

interface Props extends StackHeaderTitleProps {
    year: number;
}

export default class SeasonOptionsHeader extends Component<Props> {
    render() {
        return (
            <View>
                <Text>Temporada de {this.props.year}</Text>
            </View>
        );
    }
}
