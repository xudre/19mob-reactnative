import React from 'react';
import { Platform } from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';

import HomeHeaderiOS from './HeaderiOS';
import HomeHeaderAndroid from './HeaderAndroid';

const Header = Platform.select({
    ios: () => HomeHeaderiOS,
    android: () => HomeHeaderAndroid,
    default: () => HomeHeaderAndroid,
})();

const HomeHeader = (props: StackHeaderTitleProps) => {
    return (<Header />);
};

export default HomeHeader;
