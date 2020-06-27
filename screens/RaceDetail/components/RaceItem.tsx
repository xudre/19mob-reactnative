import React, { Component } from 'react';
import { List, ListItem, Label } from 'native-base';
import { StyleSheet } from 'react-native';
import { Race } from '../../../data/api-response';

const RaceItemItemStyle = StyleSheet.create({
    name: {
        fontSize: 16,
    },
    view: {
        backgroundColor: '#ffffff',
    }
});

export default class RaceItem extends Component<{
    race: Race;
}> {
    render() {
        return (
            <List style={RaceItemItemStyle.view}>
                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                        Corrida: {this.props.race.raceName}
                    </Label>
                </ListItem>
                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                    Local: {this.props.race.Circuit.Location.locality}
                    </Label>
                </ListItem>
                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                    Pais: {this.props.race.Circuit.Location.country}
                    </Label>
                </ListItem>

                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                    1° Colocado: {this.props.race.driverName}
                    </Label>
                </ListItem>
                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                    Total de voltas: {this.props.race.lapName}
                    </Label>
                </ListItem>
                <ListItem>
                    <Label style={RaceItemItemStyle.name}>
                    Melhor volta: {this.props.race.lapTime}
                    </Label>
                </ListItem>
            </List>
        );
    }
}
