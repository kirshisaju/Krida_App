import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const ViewExpense: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onSignup = () => NavigationService.navigate('Signup');
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  
  return (
 
      <View style={styles.container}>
          <View style={styles.container}>
      
        <Text style={styles.login}>Krida</Text>
        <Button  style={styles.clr} icon="apple" mode="contained" onPress={() => console.log('Pressed')}>
    Continue Using Apple
  </Button>
  <Grid>
  <Row>
 
    <Button  style={styles.ir} icon="facebook" mode="contained" onPress={() => console.log('Pressed')}>
  
</Button>
  
   
    <Button  style={styles.ir} icon="google" mode="contained" onPress={() => console.log('Pressed')}>
  
</Button>
<Button  style={styles.ir} icon="mail" mode="contained" onPress={() => console.log('Pressed')}>
  
</Button>
<Button  style={styles.ir} icon="phone" mode="contained" onPress={() => console.log('Pressed')}>
  
</Button>
 
  </Row>
</Grid>
<Text style={styles.signin} onPress={onLogin}> Dont have an account? Login</Text>
<Text style={styles.signin} onPress={onSignup}> Dont have an account? Sign Up</Text>


      </View>
  
    </View>

  );
};

export default ViewExpense;
