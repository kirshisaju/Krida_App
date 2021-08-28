// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from "./NavigationStack";
import { MainStackNavigator,PremierClubNavigator,WalletStackNavigator} from "./TabStack";
import MyWallet from 'app/screens/MyWallet';
import Chat from 'app/screens/Chat';
import ThemeController from '../components/ThemeController';
import LeftMenu from '../components/LeftMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const homeOptions = {
  headerRight: () => <ThemeController />,
  headerLeft: () => <LeftMenu />,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'cogs';

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Shop') {
          iconName = focused ? 'tags' : 'tags';
        }else if (route.name === 'Wallet') {
          iconName = focused ? 'tags' : 'tags';
        }else if (route.name === 'Chat') {
          iconName = focused ? 'comments' : 'comments';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Home" component={App} options={{...homeOptions,title: 'Home'}} />
      <Tab.Screen name="Shop" component={App} options={{...homeOptions, title: 'Shop'}} />
      <Tab.Screen name="PremierClubs" component={PremierClubNavigator} options={{...homeOptions, title:'PremierClubs'}} />

      <Tab.Screen name="Wallet" component={WalletStackNavigator} options={{...homeOptions, title:'Wallet'}} />
      <Tab.Screen name="Chat" component={Chat} options={{...homeOptions, title:'Chat'}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;