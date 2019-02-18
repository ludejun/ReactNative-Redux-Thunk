// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Profile } from './pages';

// 普通路由导航
// const MainNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Profile: { screen: Profile },
// });

// const App = createAppContainer(MainNavigator);

// 分Tab导航
const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Profile') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const App = createAppContainer(TabNavigator);

export default App;
