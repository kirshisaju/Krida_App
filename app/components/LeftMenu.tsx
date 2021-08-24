import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'react-native-paper';
import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation';
import DrawerActions from '@react-navigation/drawer'
import NavigationService from 'app/navigation/NavigationService';

import * as themeActions from 'app/store/actions/themeActions';
import { IThemeState } from 'app/models/reducers/theme';

interface IState {
  themeReducer: IThemeState;
}

const LeftMenu: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const [active, setActive] = React.useState('');

  const dispatch = useDispatch();
  const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Icon name='menu' size={20} style={styles.icon} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
  },
  icon: { marginLeft: 4 },
});

export default LeftMenu;
