import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, TextInput, Chip, List, Title, Portal, Dialog, Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { SceneMap, TabView } from 'react-native-tab-view';
import TrainingTimetable from './TrainingTimetable';
import { Calendar } from 'react-native-calendars';
import AddSchedule from './AddSchedule';
import AddMemberes from './AddMemberes';
import AddCoaches from './AddCoaches';

interface IState {
  loginReducer: ILoginState;
}


const Newgroup: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [visible2, setVisible2] = React.useState(false);
  const showDialogmember = () => setVisible2(true);
  const hideDialogmember= () => setVisible2(false);
  const [visible3, setVisible3] = React.useState(false);
  const showDialogcoaches = () => setVisible3(true);
  const hideDialogcoaches = () => setVisible3(false);
  


  const dispatch = useDispatch();

  return (
 
 <>
 <View style={styles.sidePadding}>
    <List.Item 
    titleStyle={{fontSize:18, paddingBottom:5, fontWeight:'bold'}}
            title="New Group"
            left={props => <List.Icon style={{color:"#000",}} {...props} icon="close" />}
            /> 
                <TextInput style={styles.popinput}
      label="Enter Group Name"
      value={text}
      onChangeText={text => setText(text)}
    />
     <Text style={{fontSize:16, paddingTop:10,fontWeight:'bold'}}>Schedule</Text>
            
            <List.Item 
            titleStyle={{fontSize:16, color:"#E75A1A",}}
            title="Add Schedule"
            left={props => <List.Icon {...props} style={styles.orange} icon="plus" />}
            /> 
            <Text style={{fontSize:16, paddingTop:5,fontWeight:'bold'}}>Memberes</Text>
            <List.Item
            titleStyle={{fontSize:16, color:"#E75A1A",}}
            title="Add Memberes"
            left={props => <List.Icon {...props} style={styles.orange} icon="plus" />}
            /> 
            <Title style={{fontSize:16, paddingTop:10,fontWeight:'bold'}}> Select the days</Title>
            <Calendar style={styles.barCalender}/>
            <Text style={{fontSize:16, paddingTop:15,fontWeight:'bold'}}>Assign coaches</Text>
            <List.Item
            titleStyle={{fontSize:16, color:"#E75A1A",}}
            title="Add coaches"
            left={props => <List.Icon {...props} icon="plus" />}
            /> 
            <Button mode="contained" style={styles.btndone}> DONE</Button>
            <Button onPress={showDialog} >Add Schedule</Button>
            <Button onPress={showDialogmember} >Add Member</Button>
            <Button onPress={showDialogcoaches} >Add Coaches</Button>
            <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
    <AddSchedule/>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible2} onDismiss={hideDialogmember}>
    <AddMemberes/>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible3} onDismiss={hideDialogcoaches}>
    <AddCoaches/>
        </Dialog>
      </Portal>
      </View>
 </>

  );
};

export default Newgroup;
