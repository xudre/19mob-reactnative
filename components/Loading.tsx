import React, { Component } from 'react';
import { Spinner } from 'native-base';

export default class Loading extends Component {
    render() {
        return <Spinner color="red"/>;
    }
}
