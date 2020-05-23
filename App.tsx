import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home/index';
import Season from './screens/Season/index';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Season: { screen: Season }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    },
  }
);

const App = createAppContainer(AppNavigator);

export default App;
