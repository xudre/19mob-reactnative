import React, { Component } from 'react';
import { Content, Container, Button, Text } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../App';

import HomeStyles from './styles';
import Seasons from './components/Seasons';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Season'>;
};

export default class Home extends Component<Props> {
    openSeason(year: number): void {
        this.props.navigation.navigate('SeasonOptions', { year });
    }

    render() {
        return (
            <Container style={ HomeStyles.content }>
                <Content>
                    <Seasons onClick={ (year) => this.openSeason(year) } />
                </Content>
            </Container>
        )
    }
}
