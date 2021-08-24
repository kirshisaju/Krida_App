import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import { Col, Grid } from 'react-native-easy-grid';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import Newgroup from './Newgroup';




interface IState {
  loginReducer: ILoginState;
}

const TrainingTimetable: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isVisible, setIsvisible] = React.useState(false);
  const [drawerOffset, setDrawerOffset] = React.useState(-100);
  const [text, setText] = React.useState('');
  
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const renderContent = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
    }}
  >
<Newgroup/>
  </View>
  );
  const sheetRef = React.useRef(null);
  
  return (
          <>
          <View style={styles.sidePadding}>
            <List.Item style={{paddingLeft:0,}}
            titleStyle={{fontSize:18, paddingLeft:0, paddingBottom:10, fontWeight:'bold'}}
            title="Schedule"
            description="Wednesday 7.00pm-8.00Am"

            right={props => <List.Icon {...props} style={styles.penciltip} icon="pencil" />}
            /> 
              <Title style={{fontSize:18, paddingLeft:0, paddingBottom:10, fontWeight:'bold'}}>
                Memberes
              </Title>
            <Grid>
              <Col>
              <Avatar.Image size={60} source={require('../../assets/login-bg.jpg')} />
              </Col>
              <Col>
              <Avatar.Image size={60} source={require('../../assets/login-bg.jpg')} />
              </Col>
              <Col>
              <Avatar.Image size={60} source={require('../../assets/login-bg.jpg')} />
              </Col>
            </Grid>
            <Title style={{fontSize:18, paddingLeft:0, paddingTop:10,paddingBottom:10, fontWeight:'bold'}}> Calender View </Title>
            <Calendar />
            <Title style={{fontSize:18, paddingLeft:0, paddingTop:10,paddingBottom:10, fontWeight:'bold'}}> Assign Coaches </Title>
            <Grid>
              <Col>
              <Avatar.Image size={60} source={require('../../assets/login-bg.jpg')} />
              </Col>
            </Grid>
            <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent}
              
  
              
            />
            <FAB
              style = {styles.fabs}
              small
              icon  = "plus"
              onPress={() => sheetRef.current.snapTo(0)}
            /> 
            </View>
          </>
  );
};

export default TrainingTimetable;