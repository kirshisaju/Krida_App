import React from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
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
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

interface IState {
  loginReducer: ILoginState;
}

GoogleSignin.configure({
  webClientId: '382606069878-5i2ckg3rnipeiuemvi23u5grus829m9r.apps.googleusercontent.com'
});

const Googlesignup: React.FC = () => {

const id = useSelector((state: IState) => state.loginReducer.id);

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const dispatch = useDispatch();

const onCreateevent = () => dispatch(NavigationService.navigate('NewEvent'));
  return (
    <>


<TouchableHighlight style={[styles.ir,styles.btn]}  >
        <Image   style={{height: 24,width:24, alignSelf: 'center'}}  source={require('../../assets/google.png')}   />
      </TouchableHighlight>

  </>
  

  );
};

export default Googlesignup;