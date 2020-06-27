import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Container, Content } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../App';

import { Race } from '../../data/api-response';
import ApiService from '../../services/Api';

import Loading from '../../components/Loading';
import RaceItem from './components/RaceItem';

const SeasonsStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
});

export type Props = {
    route: RouteProp<RootStackParamList, 'Season'>,
    navigation: StackNavigationProp<RootStackParamList, 'RaceDetail'>;
};

export default class Season extends Component<Props> {
    races: Race[] = [];

    state = {
        loading: false,
    };

    openRace(year: number, round: number): void {
        this.props.navigation.navigate('RaceDetail', { year, round });
    }

    componentDidMount(): void {
        this.setState({ loading: true });

        ApiService.season(this.props.route.params.year)
            .then((result) => {
                result.MRData.RaceTable?.Races?.forEach((raceInfo) => {
                    this.races.push(raceInfo);
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
                    <Loading/>
                </View>
            );
        }

        return (
            <Container>
                <Content>
                    <List>
                        {this.races.map((race: Race) => (
                            <RaceItem key={race.round}
                                      race={race}
                                      onPress={ (info) => this.openRace(+race.season, +race.round) } />
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}
