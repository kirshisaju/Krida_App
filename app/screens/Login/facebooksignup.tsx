import React from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Icon from 'react-native-paper/lib/typescript/components/Icon';

interface IState {
  loginReducer: ILoginState;
}

const Facebooksignup: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const onCreateevent = () => dispatch(NavigationService.navigate('NewEvent'));
  return (
          <>

  <TouchableHighlight style={[styles.ir,styles.btn]}  onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}  >
        <Image   style={{height: 24,width:24, alignSelf: 'center'}}  source={require('../../assets/facebook.png')}   />
      </TouchableHighlight>

          </>
  );
};

export default Facebooksignup;