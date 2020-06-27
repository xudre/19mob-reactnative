import React, { Component } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Label, Container, Content, Text, ListItem, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';

import { RootStackParamList } from '../../App';

const DriverDetailStyle = StyleSheet.create({
    view: {
        padding: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    birth: {
        marginStart: 'auto',
    }
});

export type DriverProps = {
    route: RouteProp<RootStackParamList, 'DriverDetail'>,
    navigation: StackNavigationProp<RootStackParamList, 'DriverDetail'>;
};

export default class DriverDetail extends Component<DriverProps> {
    render() {
        const { driver } = this.props.route.params;

        return (
            <Container>
                <Content>
                    <ListItem>
                        <Label style={DriverDetailStyle.name}>
                            {driver.givenName} {driver.familyName}
                        </Label>
                    </ListItem>

                    <ListItem>
                        <Text>{driver.nationality}</Text>

                        <Text style={DriverDetailStyle.birth}>{driver.dateOfBirth}</Text>
                    </ListItem>

                    <View style={DriverDetailStyle.view}>
                        <Button onPress={ () => open(driver.url)}>
                            <Text>Biografia</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
