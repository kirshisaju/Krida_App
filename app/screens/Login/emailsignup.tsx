import React from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';


interface IState {
  loginReducer: ILoginState;
}

const Emailsignup: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  const onEmailSignup = () => NavigationService.navigate('SignIn');

  return (
    <>
      <TouchableHighlight style={[styles.ir,styles.btn]} onPress={onEmailSignup} >
        <Image style={{height: 20,width:26, alignSelf: 'center'}}  source={require('../../assets/gmail.png')}   />
      </TouchableHighlight>
    </>
  );
};

export default Emailsignup;