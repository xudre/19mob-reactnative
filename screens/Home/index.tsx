import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Container, Text } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import Seasons from './components/Seasons';

import { RootStackParamList } from '../../App';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Season'>;
};

const HomeStyles = StyleSheet.create({
    content: {
        padding: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },
});

export default class Home extends Component<Props> {
    openSeason(year: number): void {
        this.props.navigation.navigate('Season', { year });
    }

    render() {
        return (
            <Container style={ HomeStyles.content }>
                <Text style={ HomeStyles.header }>Temporadas de F1</Text>

                <Content>
                    <Seasons onClick={ (year) => this.openSeason(year) } />
                </Content>
            </Container>
        )
    }
}
