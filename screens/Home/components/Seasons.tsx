import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import ApiService from '../../../services/Api';
import Loading from '../../../components/Loading';
import AppStyles from '../../../AppStyles';

const SeasonsStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
    button: {
        backgroundColor: "#e3e3e3",
        marginBottom: 10,
    },
    buttonText: {
        color: "#4d4d4"
    }
});

const buttonStyle = StyleSheet.compose(AppStyles.button, SeasonsStyles.button);

type Props = {
    onClick: (year: number) => void;
};

export default class Seasons extends Component<Props> {
    state = {
        loading: false,
        years: [],
    }

    componentDidMount(): void {
        this.loadContent();
    }

    loadContent(): void {
        this.setState({ loading: true });

        const limit = 999;

        ApiService.seasons(limit).then((res) => {
            const list: number[] = [];

            res.MRData.SeasonTable?.Seasons.map((season) => {
                list.push(parseInt(season.season, 10));
            });

            list.sort((n1, n2) => n2 - n1);

            this.setState({
                years: list.slice(0, limit)
            });
        })
        .finally(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={ SeasonsStyles.view }>
                    <Loading />
                </View>
            );
        }

        return this.state.years.map((year) => (
            <Button key={ year }
                    style={ buttonStyle }
                    onPress={ () => this.props.onClick(year) }>
                <Text style={SeasonsStyles.buttonText}>{ year }</Text>
            </Button>
        ));
    }
};
