import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const EventCreate: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [text, setText] = React.useState('');
  return (
 
      <View >
          <View style={styles.createform}>
      
          <TextInput
   label="Club Name"
   value={text}
   onChangeText={text => setText(text)}
   />
         <TextInput style={styles.inputtext}
             label="Club Address"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput style={styles.inputtext}
             label="Club Date"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput style={styles.inputtext}
             label="Club Email Address"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput style={styles.inputtext}
             label="Club Post Code"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput style={styles.inputtext}
             label="Country Code"
             value={text}
             onChangeText={text => setText(text)}
             />
       <Text >Select Club Type</Text>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Button  mode="contained" >
           Continue
           </Button>

      </View>
  
    </View>

  );
};

export default EventCreate;
