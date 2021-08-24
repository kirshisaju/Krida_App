import React from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import Slider from '@react-native-community/slider';
import DropDown from "react-native-paper-dropdown";
import EventCreate from 'app/screens/Events/create';


interface IState {
  loginReducer: ILoginState;
}

const Phonesignup: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onSignUp = () => NavigationService.navigate('SignUp');
  const onCreateevent = () => dispatch(NavigationService.navigate('NewEvent'));
  
  return (
          <>
            <TouchableHighlight style={[styles.ir,styles.btn]} onPress={onSignUp}  >
              <Image   style={{height: 24,width:20, alignSelf: 'center'}}  source={require('../../assets/phone.png')}   />
            </TouchableHighlight>
          </>
  );

};

export default Phonesignup;