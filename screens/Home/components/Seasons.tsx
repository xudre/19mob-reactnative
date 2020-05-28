import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import ApiService from '../../../services/Api';
import Loading from '../../../components/Loading';

const SeasonsStyles = StyleSheet.create({
    view: {
        padding: 20,
    },
    button: {
        marginBottom: 10,
    },
});

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

        ApiService.seasons(999).then((res) => {
            const list: number[] = [];

            res.MRData.SeasonTable?.Seasons.map((season) => {
                list.push(parseInt(season.season, 10));
            });

            list.sort((n1, n2) => n2 - n1);

            this.setState({
                years: list.slice(0, 10)
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
                    <Loading/>
                    {/* <Text style={ SeasonsStyles.loading }>Carregando...</Text> */}
                </View>
            );
        }

        return this.state.years.map((year) => (
            <Button key={ year }
                    style={ SeasonsStyles.button }
                    onPress={ () => this.props.onClick(year) }>
                <Text>{ year }</Text>
            </Button>
        ));
    }
};
