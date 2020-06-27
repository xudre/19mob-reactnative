import React, { Component } from 'react';
import { ListItem, Label, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { Driver } from '../../../data/api-response';

const DriverItemStyle = StyleSheet.create({
    name: {
        fontSize: 16,
    },
    nationality: {
        marginStart: 'auto',
    },
});

export default class DriverItem extends Component<{
    driver: Driver,
    onPress: (driver: Driver) => void,
}> {
    render() {
        return (
            <ListItem onPress={ () => this.props.onPress(this.props.driver) }>
                <Label style={DriverItemStyle.name}>
                    {this.props.driver.givenName} {this.props.driver.familyName}
                </Label>
                <Text style={DriverItemStyle.nationality} note>
                    {this.props.driver.nationality}
                </Text>
            </ListItem>
        );
    }
}
