import React, { Component } from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Container, Content, List, Label } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../App';

import ApiService from '../../services/Api';
import { Driver } from '../../data/api-response';
import Loading from '../../components/Loading';
import DriverItem from './components/DriverItem';

const DriversStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
    button: {
        backgroundColor: '#e3e3e3',
        marginBottom: 10,
    },
    buttonText: {
        color: '#4d4d4',
    },
    notFound: {
        textAlign: 'center',
    }
});

export type DriversProps = {
    route: RouteProp<RootStackParamList, 'Season'>,
    navigation: StackNavigationProp<RootStackParamList, 'RaceDetail'>;
};

export default class Drivers extends Component<DriversProps> {
    state = {
        loading: false,
        drivers: [],
    };

    componentDidMount(): void {
        this.loadContent();
    }

    loadContent(): void {
        this.setState({ loading: true });

        const limit = 999;

        ApiService.drivers(this.props.route.params.year, limit)
            .then((res) => {
                let drivers: Driver[] = [];

                if (res.MRData.DriverTable) {
                    drivers = res.MRData.DriverTable.Drivers || [];
                }

                this.setState({ drivers });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={DriversStyles.view}>
                    <Loading />
                </View>
            );
        }

        if (!this.state.drivers || this.state.drivers.length < 1) {
            return (
                <View style={DriversStyles.view}>
                    <Label style={DriversStyles.notFound}>Nenhum piloto encontrado.</Label>
                </View>
            )
        }

        return (
            <Container>
                <Content>
                    <List>
                        {this.state.drivers.map((driver: Driver) => (
                            <DriverItem key={driver.driverId} driver={driver} onPress={
                                () => this.props.navigation.navigate('DriverDetail', { driver })
                            } />
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}
