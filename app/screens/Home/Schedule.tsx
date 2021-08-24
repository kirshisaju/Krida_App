import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import { Col, Grid } from 'react-native-easy-grid';

interface IState {
  loginReducer: ILoginState;
}

const Schedule: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  
  return (
    <>
    <View style={styles.sidePadding}>
      <Text style={styles.mainTitle}>Schedules</Text>
      <CalendarStrip style={{ paddingTop: 12, marginTop: 15, paddingBottom:12, borderColor:'#aaa', borderTopWidth:1, borderBottomWidth:1 }} />
      <Text style={styles.subTitle}>Today</Text> 
          <View style={styles.borderClass}>
            <List.Item 
            titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:15, fontWeight:'bold'}}
            descriptionStyle={{color: "rgba(0,0,0,0.7)", fontSize:14,}}
            title="6.00 - 7.00 pm "
            description="SpartSpark University Of East"
            left={props => <Text style={styles.textdate}>12 {"\n"}Jul</Text>}
            right={props => <List.Icon {...props} icon="chevron-right"  />}/>
            
          </View>   
          
      <Text style={styles.subTitle}>Upcoming</Text>
          <List.Item style={[styles.borderClass,styles.borderYellow]}
          title="6.00 - 7.00 pm "
          description="SpartSpark University Of East"
          left={props => <List.Icon {...props} icon="folder" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          />
      <List.Item style={[styles.borderClass,styles.borderYellow]}
          title="6.00 - 7.00 pm "
          description="SpartSpark University Of East"
          left={props => <List.Icon {...props} icon="folder" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          />
      <Text style={styles.upcoming}>Past</Text>
      <List.Item style={[styles.borderClass,styles.borderGreen]}
          title="6.00 - 7.00 pm "
          description="SpartSpark University Of East"
          left={props => <List.Icon {...props} icon="folder" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          />
           <Button onPress={showDialog} >Modal 1</Button>
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
           <List.Item
                title="6.00 - 7.00 pm "
                description="SpartSpark University Of East"
                left={props => <List.Icon {...props} icon="close"  />}
                right={props => <List.Icon {...props} icon="share-google"  />}
              />
        <Grid>
            <Col size={25}><Text >user</Text></Col>
            <Col size={50}><Switch /></Col>
            <Col size={25}><List.Icon icon="share-google"/></Col>
        </Grid>

        <Card.Title  style={styles.cardtitle}
            title="7-9 Tomarrow,23 April"
            left={(props) => <List.Icon {...props} icon="calendar"/>}
            />
        <Card.Title  style={styles.cardtitle}
            title="Spot Spark University Of East"
            left={(props) => <List.Icon {...props} icon="angle-right"/>}
            right={(props) => <List.Icon {...props} icon="chevron-right"/>}
            />
        <Card.Title  style={styles.cardtitle}
            title="7-9 Tomarrow,23 April"
            left={(props) => <List.Icon {...props} icon="calendar" />}
            />
        <Dialog.Actions>
            <Button onPress={hideDialog}><Text>Done</Text></Button>
        </Dialog.Actions>
        </Dialog>
      </Portal>
      </View>
    </>
  );
};

export default Schedule;