import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, TextInput, Chip, List, Title, Portal, Dialog, Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

import { Col, Row, Grid } from "react-native-easy-grid";
import { SceneMap, TabView } from 'react-native-tab-view';
import TrainingTimetable from './TrainingTimetable';
import { Calendar } from 'react-native-calendars';

interface IState {
  loginReducer: ILoginState;
}


const AddSchedule: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(true);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  const dispatch = useDispatch();

  return (
 
 <>
   
            
   <View style={styles.sidePadding}>
   <Title style={{fontSize:16, paddingTop:15,fontWeight:'bold'}}>Add Schedule</Title>
   <TextInput style={styles.addinput}
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      
    />
    <TextInput style={styles.addinput}
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      
    />
    <TextInput style={styles.addinput}
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      
    />
   
   
        <Dialog.Actions>
            <Button style={styles.btndonepop} onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
    </View>
 </>

  );
};

export default AddSchedule;
