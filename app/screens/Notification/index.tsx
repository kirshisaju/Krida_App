import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const Notification: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visibles, setVisibles] = React.useState(false);
  const showDialog2 = () => setVisibles(true);
  const hideDialog2= () => setVisibles(false);
  const [text, setText] = React.useState('');
  
  return (
    <>
    <View style={styles.sidePadding}>
    <List.Item
    titleStyle={{fontSize:18, fontWeight:'bold'}}
    title="Notification"
    left={props =>  <List.Icon {...props} icon="close" />}
    
  />
  
  <List.Item style={styles.listLine}
  title="Premier Club"
  description="SpartSpark University Of East"
  left={props =>  <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
  right={props => <List.Icon {...props} icon="chevron-right" />}
  
/>
  
<List.Item style={styles.listLine}
  title="Premier Club"
  description="SpartSpark University Of East"

  left={props =>  <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
  right={props => <List.Icon {...props} icon="chevron-right" />}
  
/>
  
<List.Item style={styles.listLine}
  title="Premier Club"
  description="SpartSpark University Of East"

  left={props =>  <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
  right={props => <List.Icon {...props} icon="chevron-right" />}
  
/>
  
<List.Item style={styles.listLine}
  title="Premier Club"
  description="SpartSpark University Of East"

  left={props =>  <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
  right={props => <List.Icon {...props} icon="chevron-right" />}
  
/>
<>
           <Button onPress={showDialog2}>Modal 2</Button>
        <Dialog visible={visibles} onDismiss={hideDialog2} >
        <List.Item
  title="Delete"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon  icon="delete" />}
/>
<List.Item
  title="Mute"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon icon="close" />}
/>
<List.Item
  title="Turn off"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon   icon="alarm" />}
/>
<List.Item
  title="View Setting"
  description="SpartSpark University Of East"
  left={props =>  <List.Icon   icon="setting" />}
/>
           </Dialog>
           </>
           </View>
   </>   
   
  );
};

export default Notification;
