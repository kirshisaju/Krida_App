import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, TextInput, Chip, List, Title, Portal, Dialog, Switch, Searchbar, Avatar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { SceneMap, TabView } from 'react-native-tab-view';
import TrainingTimetable from './TrainingTimetable';
import { Calendar } from 'react-native-calendars';

interface IState {
  loginReducer: ILoginState;
}


const AddCoaches: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);


  const dispatch = useDispatch();

  return (
 
 <>

<View style={styles.sidePadding}>
<List.Item style={{paddingTop:20,}}
titleStyle={{fontSize:18, fontWeight:'bold'}}
            title="Add Coaches"
            left={props => <List.Icon {...props} icon="close" />}
            /> 
     <Searchbar style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    /> 
    <List.Item style={styles.addLine}
           titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            /> 
              <List.Item style={styles.addLine}
              titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            /> 
              <List.Item style={styles.addLine}
              titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            /> 
              <List.Item style={styles.addLine}
              titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            /> 
             <List.Item style={styles.addLine}
             titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            />
                  <List.Item style={styles.addLine}
                  titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon {...props} icon="check-circle" />}
            />
                  <List.Item style={styles.addLine}
                  titleStyle={{fontSize:16,fontWeight:'bold'}}
            title="John Peter"
            description="@place"
            left={props => <Avatar.Image size={50} source={require('../../assets/login-bg.jpg')} />}
            right={props => <List.Icon style={styles.circleClr} {...props}icon="check-circle"/>}
            />
             <List.Item style={{paddingBottom:20,}}
             titleStyle={{fontSize:16, paddingTop:10,fontWeight:'bold'}}
            title="3 Member selected"
            right={props => <Button mode="contained" onPress={hideDialog} style={styles.memBtn}>Done</Button>}
            />
     
     </View>
      
 </>

  );
};

export default AddCoaches;
