import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import { Race, Driver } from './data/api-response';

import Home from './screens/Home/index';
import Season from './screens/Season/index';
import SeasonOptions from './screens/SeasonOptions';
import HomeHeader from './screens/Home/components/Header';
import Drivers from './screens/Drivers/index';
import DriverDetail from './screens/DriverDetail/index';
import RaceDetail from './screens/RaceDetail/index';
import SeasonOptionsHeader from './screens/SeasonOptions/components/SeasonOptionsHeader';

export type RootStackParamList = {
    Home: undefined;
    SeasonOptions: { year: number };
    Season: { year: number };
    Drivers: { year: number };
    DriverDetail: { driver: Driver };
    RaceDetail: { year: number , round: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export class AppSingleton {
    static onSeason: number;
}

export default class App extends Component {
    state = {
        isReady: false,
    };

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...
            Ionicons.font,
        });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home"
                                  component={Home}
                                  options={{
                                    headerTitle: props => <HomeHeader {... props} />,
                                  }} />
                    <Stack.Screen name="SeasonOptions"
                                  component={SeasonOptions}
                                  options={{
                                    headerTitle: props => <SeasonOptionsHeader year={AppSingleton.onSeason} {... props} />,
                                  }} />
                    <Stack.Screen name="Season"
                                  component={Season}
                                  options={{
                                    headerTitle: 'Corridas'
                                  }} />
                    <Stack.Screen name="Drivers"
                                  component={Drivers}
                                  options={{
                                    headerTitle: 'Pilotos'
                                  }} />
                    <Stack.Screen name="DriverDetail"
                                  component={DriverDetail}
                                  options={{
                                    headerTitle: 'Piloto'
                                  }} />
                     <Stack.Screen name="RaceDetail"
                                  component={RaceDetail}
                                  options={{
                                    headerTitle: 'Detalhe da corrida'
                                  }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
