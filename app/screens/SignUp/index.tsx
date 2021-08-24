import React, { useRef } from 'react';
import { Image, View, ImageBackground } from 'react-native';
import { Text, Button, TextInput, Title, Avatar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import PhoneInput from "react-native-phone-number-input";
import auth from '@react-native-firebase/auth';

interface IState {
  loginReducer: ILoginState;
}

const SignUp: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [confirm, setConfirm] = React.useState<any>(null);
  const [code, setCode] = React.useState('');
  
  const swiper = useRef<any>(null)
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(formattedValue);
    setConfirm(confirmation);
    swiper.current.scrollBy(1)
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <>
    <Swiper ref={swiper} style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide1}>
        <Title style={styles.title}>Phone</Title>
        <Text style={styles.text}>Enter your phone number so we can text you an authentication code</Text>
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            containerStyle={styles.phonenumber}
            autoFocus

          />
        <>
          <Button mode="contained" style={styles.buttoncontinue} onPress={signInWithPhoneNumber}>
            Continue
          </Button>
        </>
      </View>
      <View style={styles.slide2}>

        <Title style={styles.title}>Enter your OTP</Title>
        <Text style={styles.text}>OTP has been sent to your email</Text>
        <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        setCode(code); confirmCode();
        console.log(`Code is ${code}, you are good to go!`)
    }}
  /> 

      </View>
      <ImageBackground source={require('../../assets/login-bg.jpg')} style={styles.backgroundImage}>
        <View style={styles.slide3}>
          <Title style={styles.Prod}>Terms and Conditions</Title>
          <Text style={styles.exte}>Extend Your Workspace And Expand Your Connectivity With Pro Communication Tools</Text>
          <Avatar.Icon  style={{marginLeft:300,marginTop:100}} icon="arrow-right" />
        </View>
      </ImageBackground>
    </Swiper>
    </>
  );
};

export default SignUp;
