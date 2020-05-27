import React, { Component } from 'react';
import { Text, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';

export interface RaceInfo {
    name: string;
    date: Date;
    circuit: string;
    local: string;
    country: string;
}

type Props = {
    info: RaceInfo;
};

const RaceStyles = StyleSheet.create({
    label: {
        maxWidth: 100,
        marginEnd: 10,
    },
    info: {},
});

export default class Race extends Component<Props> {
    render() {
        return (
            <ListItem key={this.props.info.name}>
                <Text style={RaceStyles.label}>{this.props.info.name}</Text>
                <Text style={RaceStyles.info} note>
                    {this.props.info.circuit + '\n' + this.props.info.country}
                </Text>
            </ListItem>
        );
    }
}
