import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Paragraph } from 'react-native-paper';
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

    <Grid >
     <Col size={15}>
      <Text style={{color:'#000537',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#000537',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      <Row>
      <Button >Accept</Button>
      <Button >Decline</Button>
      </Row>
      </Col>
      <Col size={15} onPress={showDialog2}>
      <List.Icon icon="dots-horizontal"  />
     </Col>
</Grid> 

<Grid >
     <Col size={15}>
      <Text style={{color:'#000537',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#000537',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      <Row>
      <Button >Accept</Button>
      <Button >Decline</Button>
      </Row>
      </Col>
      <Col size={15} onPress={showDialog2} >
      <List.Icon icon="dots-horizontal" />
     </Col>
</Grid> 


<Grid >
     <Col size={15}>
      <Text style={{color:'#000537',fontSize:10,textTransform:'uppercase',textAlign:'center',marginTop:12}}>May</Text>
      <Paragraph style={{color:'#000537',fontSize:19,textAlign:'center',marginTop:10}}>6</Paragraph>
      </Col>
      <Col size={70}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>7:00 - 9:00 AM</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>Sportspark University of East, Nor...</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:10,opacity:.5}}>Courts 1, 5</Paragraph>
      <Row>
      <Button >Accept</Button>
      <Button >Decline</Button>
      </Row>
      </Col>
      <Col size={15} onPress={showDialog2}>
      <List.Icon icon="dots-horizontal"  />
     </Col>
</Grid> 



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
        
   </>   
   
  );
};

export default Notification;
