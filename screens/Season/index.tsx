import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, Container, Content } from 'native-base';
import { RouteProp } from '@react-navigation/native';

import ApiService from '../../services/Api';

import { RootStackParamList } from '../../App';

import Race from './components/Race';
import { RaceInfo } from './components/Race';

const SeasonsStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
    loading: {
        fontStyle: 'italic',
        textAlign: 'center',
    },
});

type Props = {
    route: RouteProp<RootStackParamList, 'Season'>,
};

export default class Season extends Component<Props> {
    races: RaceInfo[] = [];

    state = {
        loading: false,
    };

    componentDidMount(): void {
        this.setState({ loading: true });

        ApiService.season(this.props.route.params.year)
            .then((result) => {
                result.MRData.RaceTable.Races.forEach((raceInfo) => {
                    this.races.push({
                        name: raceInfo.raceName,
                        circuit: raceInfo.Circuit.circuitName,
                        date: raceInfo.date,
                        local: raceInfo.Circuit.Location.locality,
                        country: raceInfo.Circuit.Location.country,
                    });
                });

                this.setState({ loading: false });
            })
            .catch((reason) => {
                console.warn('API', reason);
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={ SeasonsStyles.view }>
                    <Text style={ SeasonsStyles.loading }>Carregando...</Text>
                </View>
            );
        }

        return (
            <Container style={ SeasonsStyles.view }>
                <Content>
                    <List>
                        {this.races.map((info) => (
                            <Race info={info} />
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}
