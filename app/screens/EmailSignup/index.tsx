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

const EmailSignup: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const swiper = React.useRef<any>(null)

  async function onSignupButtonPress() {
    let emailCheck = emailValidator( email );
    if( !emailCheck ){
      auth()
      .createUserWithEmailAndPassword( email, password )
      .then((userCredential) => {
        swiper.current.scrollBy(1)
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }
      });
    }else{
      setError(emailCheck);
    }
  }

  return (
    <>
    <Swiper style={styles.wrapper} showsButtons={false} scrollEnabled={false}>
      <View style={styles.slide1}>
        <Title style={styles.title}>Email</Title>
        <Text style={styles.text}>Enter your email so we can text you an authentication code</Text>
        
            <TextInput style={styles.inputtext} label="Email" value={email} onChangeText={text => setEmail(text)} />
          
            <TextInput style={styles.inputtext} label="Password" value={password} onChangeText={text => setPassword(text)} />
          
            <Button mode="contained" style={styles.buttoncontinue} onPress={onSignupButtonPress} >
              Continue
            </Button>
      </View>
      <View style={styles.slide2}>

        <Title style={styles.title}>Confirm</Title>
        <Text style={styles.text}>Sent you confirmation email, Check your inbox or spam folder</Text>
     
      </View>
      <ImageBackground source={require('../../assets/login-bg.jpg')} style={styles.backgroundImage}>
        <View style={styles.slide3}>
          <Title style={styles.Prod}>Terms and Conditions</Title>
          <Text style={styles.exte}>Extend Your Workspace And Expand Your Connectivity With Pro Communication Tools</Text>
          <Avatar.Icon  style={{marginLeft:300,marginTop:100}} icon="arrow-right" />
        </View>
      </ImageBackground>
    </Swiper>
    <Toast message={error} onDismiss={() => setError('')} />
    </>
  );
};

export default EmailSignup;
