import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { render } from 'react-native-testing-library';

import Season from '../index';

const MockStack = createStackNavigator();
const MockNavigator = ({component = React.Component, params = {}}) => {
    return (<NavigationContainer>
        <MockStack.Navigator>
            <MockStack.Screen
                name="Mockup Screen"
                component={component}
                initialParams={params}
             />
        </MockStack.Navigator>
    </NavigationContainer>);
};

const mockProps = {
    year: 2020
};

describe('Season Screen', () => {
    it('should be rendered', async (done) => {
        const element = render(<MockNavigator component={Season} params={mockProps} />);

        expect(element.toJSON()).toMatchSnapshot();

        done();
    });
});
