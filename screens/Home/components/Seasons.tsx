import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const SeasonsStyles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
});

const years: number[] = [2020, 2019, 2018, 2017];

type Props = {
    onClick: (year: number) => void;
};

export default class Seasons extends Component<Props> {
    render() {
        return years.map((year) => (
            <Button key={ year }
                    style={ SeasonsStyles.button }
                    onPress={ () => this.props.onClick(year) }>
                <Text>{ year.toString() }</Text>
            </Button>
        ));
    }
};
