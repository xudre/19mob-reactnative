import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Card, CardItem, Right, Icon } from 'native-base'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList, AppSingleton } from '../../App';

import styles from './styles';

export type Props = {
    route: RouteProp<RootStackParamList, 'Season'>,
    navigation: StackNavigationProp<RootStackParamList, 'SeasonOptions'>;
};

export default class SeasonOptions extends Component<Props> {
    navigateRaces() {
        this.props.navigation.navigate('Season', { year: this.props.route.params.year })
    }

    navigateDrivers() {
        this.props.navigation.navigate('Drivers', { year: this.props.route.params.year })
    }

    componentWillMount() {
        AppSingleton.onSeason = this.props.route.params.year;
    }

    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Text style={styles.title}>Quais informações você deseja saber sobre a temporada?</Text>

                    <View style={styles.optionsContainer}>
                        <Card>
                            <CardItem button onPress={ () => this.navigateRaces() }>
                                <Icon type="FontAwesome" name="flag-checkered" />
                                <Text>Corridas</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem button onPress={ () => this.navigateDrivers() }>
                                <Icon type="FontAwesome" name="car" />
                                <Text>Pilotos</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        )
    }
}
