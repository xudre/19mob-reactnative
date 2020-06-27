import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../App';

import Loading from '../../components/Loading';
import ApiService from '../../services/Api'
import { Race, RaceResult } from '../../data/api-response';
import RaceItem from './components/RaceItem'
import { Content, Label } from 'native-base';

const RaceDetailStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
    notFound: {
        textAlign: 'center',
    }
});

type RaceDetailProps = {
    route: RouteProp<RootStackParamList, 'RaceDetail'>
};

export interface RaceExt extends Race {
    locality: string,
    country: string,
}

export default class RaceDetail extends Component<RaceDetailProps> {
    race: Race | null = null;

    state = {
        loading: true
    }

    componentDidMount() {

        this.setState({
            loading: true
        })

        ApiService.seasonResults(+this.props.route.params.year, +this.props.route.params.round).then((res) => {
            console.log(res);
            this.race = res.MRData.RaceTable?.Races ? res.MRData.RaceTable?.Races[0] : null;

            if (!this.race || !this.race.Results) return;

            const result: RaceResult = this.race.Results[0];

            if (!result) return;

            const { givenName, familyName } = result.Driver;

            this.race.driverName = `${givenName} ${familyName}`;
            this.race.lapName = result.FastestLap.lap;
            this.race.lapTime = result.FastestLap.Time.time;
        }).finally(() => {
            this.setState({ loading: false })
        });
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        if (!this.race) {
            return (<Content style={RaceDetailStyles.view}>
                <Label style={RaceDetailStyles.notFound}>
                    Corrida não encontrada 😢
                </Label>
            </Content>)
        } else {
            return <RaceItem race={this.race}/>
        }
    }
}