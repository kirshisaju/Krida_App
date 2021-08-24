import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MyWallet from "../screens/MyWallet";
import Contact from "../screens/Contact";
import Clubdetail from "app/screens/Clubdetail";
import ThemeController from "app/components/ThemeController";
import NewClub from "app/screens/NewClub";
import Clubsetup from "app/screens/Clubsetup";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={MyWallet} />
      <Stack.Screen name="Clubdetail" component={Clubdetail} options={{
                                                        title: 'Clubdetail',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />  
      <Stack.Screen name="Clubsetup" component={Clubsetup} options={{
                                                        title: 'Clubsetup',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />  
      <Stack.Screen name="NewClub" component={NewClub} options={{
                                                        title: 'NewClub',
                                                        headerTitleStyle: {
                                                          fontWeight: 'bold',
                                                        },
                                                        headerRight: () => <ThemeController />,
                                                        }} />  


                          
    </Stack.Navigator>
  );
}

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyWallet" component={MyWallet} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator, WalletStackNavigator };