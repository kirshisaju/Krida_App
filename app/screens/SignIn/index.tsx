import React from 'react';
import { Image, View, ImageBackground } from 'react-native';
import { Text, Button, TextInput, Title, Avatar, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import auth from '@react-native-firebase/auth';
import { emailValidator } from '../../helpers/emailValidator'
import Toast from '../../components/Toast'

interface IState {
  loginReducer: ILoginState;
}

const SignIn: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function onSignupButtonPress() {
    let emailCheck = emailValidator( email );
    if( !emailCheck ){
      auth()
      .signInWithEmailAndPassword( email, password )
      .then( async(userCredential) => {
        const idTokenResult = await auth().currentUser?.getIdTokenResult()
        console.log('User JWT: ', idTokenResult);
        dispatch(loginActions.requestLogin(idTokenResult?.token))
      })
      .catch(error => {
        console.log(error)
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        console.error(error);
      });
    }else{
      setError(emailCheck);
    }
  }

  return (
    <>
      <View style={styles.slide1}>
          <Title style={styles.title}>SignIn</Title>
          <Text style={styles.text}>Enter your Email and Password</Text>
          <TextInput style={styles.inputtext} label="Email" value={email} onChangeText={text => setEmail(text)} />
          <TextInput style={styles.inputtext} label="Password" value={password} onChangeText={text => setPassword(text)} />
          <Button mode="contained" style={styles.buttoncontinue} onPress={onSignupButtonPress} >
            Continue
          </Button>
      </View>
      <Toast message={error} onDismiss={() => setError('')} />
    </>
  );
};

export default SignIn;