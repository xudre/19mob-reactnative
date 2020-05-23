import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {

    }
});

const years: number[] = [2020, 2019, 2018, 2017];

export default class Seasons extends Component {
    render() {
        return years.map((year) => (
            <Button key={year} title={year.toString()} onPress={() => {}} />
        ));
    }
};
