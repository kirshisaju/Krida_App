// ./navigation/DrawerNavigator.js

import React from "react";
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import App from "./NavigationStack";
import TabNavigator from "./TabNavigator";
import ViewExpense from 'app/screens/ViewExpense';
import AddTopup from 'app/screens/AddTopup';
import  Notification from 'app/screens/Notification';
import { useDispatch } from "react-redux";
import * as loginActions from 'app/store/actions/loginActions';
import auth from '@react-native-firebase/auth';
import { navigationRef } from './NavigationService';


const Drawer = createDrawerNavigator();
interface IProps {
  theme: Theme;
}

function CustomDrawerContent(props:any) {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          dispatch(loginActions.logOut()); 
          auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error:any) => {
            // An error happened.
          }); 
          props.navigation.closeDrawer()
        }
      }
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={App} />
        <Drawer.Screen name="Notifications" component={Notification} />
        <Drawer.Screen name="Add Expense" component={ViewExpense} />
        <Drawer.Screen name="Add Topup" component={AddTopup} />
        <Drawer.Screen name="Settings" component={App} />
        <Drawer.Screen name="Logout" component={App} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;