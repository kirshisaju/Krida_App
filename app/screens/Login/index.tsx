import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Applesignup from './applesignup';
import Facebooksignup from './facebooksignup';
import Googlesignup from './googlesignup';
import Emailsignup from './emailsignup';
import Phonesignup from './phonesignup';
import auth from '@react-native-firebase/auth';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();
  const dispatch = useDispatch();

  auth().onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await auth().currentUser?.getIdTokenResult()
      //console.log('User JWT: ', idTokenResult?.token);
      dispatch(loginActions.requestLogin(idTokenResult?.token))
      setUser(user);
      if (initializing) setInitializing(false);
      console.log('User email: ', user.email);
    }
  });

  useEffect(() => {
    
    // auth().signOut().then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  }, []);
  
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onSignUp = () => NavigationService.navigate('EmailSignup');
  const onForgot = () => NavigationService.navigate('ForgotPassword');

 
  return (
          <ImageBackground source={require('../../assets/login-bg.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>

              <Text style={styles.login} onPress={onLogin}></Text>
              <Image style={styles.tinyLogo} source={require('../../assets/logo.png')} />
              <Applesignup/> 
              <Grid>
                <Row>
                  <Facebooksignup/>
                  <Googlesignup/>
                  <Emailsignup/>
                  <Phonesignup/>
                </Row>
                <Row style={styles.signins}>
                  <Text onPress={onSignUp} style={styles.signin}> Dont have an account? <Text onPress={onSignUp} style={styles.signinbtn}>SignUp</Text></Text>
                </Row>
              </Grid>
          
            </View>
    
          </ImageBackground>
    );
};

export default Login;
