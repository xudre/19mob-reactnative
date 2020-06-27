import React, { Component } from 'react';
import { Text, ListItem, Label } from 'native-base';
import { StyleSheet } from 'react-native';

import { Race } from '../../../data/api-response';

const RaceStyles = StyleSheet.create({
    label: {
        maxWidth: 200,
    },
    info: {
        marginStart: 'auto',
    },
});

export default class RaceItem extends Component<{
    race: Race,
    onPress: (race: Race) => void
}> {
    render() {
        return (
            <ListItem onPress={ () => this.props.onPress(this.props.race) }>
                <Label style={RaceStyles.label}>
                    {this.props.race.raceName}
                </Label>
                <Text style={RaceStyles.info} note>
                    {this.props.race.Circuit.circuitName + '\n'
                     + this.props.race.Circuit.Location.country}
                </Text>
            </ListItem>
        );
    }
}
