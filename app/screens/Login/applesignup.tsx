import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import Slider from '@react-native-community/slider';
import DropDown from "react-native-paper-dropdown";
import EventCreate from 'app/screens/Events/create';
import Icon from 'react-native-paper/lib/typescript/components/Icon';


interface IState {
  loginReducer: ILoginState;
}

const Applesignup: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();



  const onCreateevent = () => dispatch(NavigationService.navigate('NewEvent'));
  return (
   <>
   <Button style={styles.appleclr} 
    labelStyle={{ fontSize: 18,color:'black',paddingTop:2}}
    icon="apple"
    mode="text"
    uppercase={false}  
  >
     Continue Using Apple
  </Button>
</>
  );
};

export default Applesignup;