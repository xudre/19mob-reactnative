import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'native-base';
import { StackHeaderTitleProps } from '@react-navigation/stack';

const HeaderStyles = StyleSheet.create({
    img: {
        width: 120,
        height: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});

const HomeHeader = (props: StackHeaderTitleProps) => {
    return (<View>
        <Image
            source={require('../../../assets/F1.png')}
            style={HeaderStyles.img}
        />
    </View>);
};

export default HomeHeader;
