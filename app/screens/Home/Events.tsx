import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import Slider from '@react-native-community/slider';
import DropDown from "react-native-paper-dropdown";
import EventCreate from 'app/screens/Events/create';


interface IState {
  loginReducer: ILoginState;
}

const Events: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [visible3, setVisible3] = React.useState(false);
  const showDialog3 = () => setVisible3(true);
  const hideDialog3= () => setVisible3(false);
  const [showDropDown, setShowDropDown] = React.useState(false);

  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  const onCreateevent = () => dispatch(NavigationService.navigate('NewEvent'));
  return (
   <>
   
   
      <List.Item 
        titleStyle={{fontSize:18,marginBottom:20, fontWeight:'bold'}}
        title="Upcoming Events"
        left={props => <Text></Text>}/>
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <Card.Title
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <List.Item 
        titleStyle={{fontSize:18,marginBottom:10, marginTop:10,fontWeight:'bold'}}
        title="Saved Events"
        left={props => <Text></Text>}/>
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <Card.Title
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <List.Item 
        titleStyle={{fontSize:18,marginBottom:10, marginTop:10,fontWeight:'bold'}}
        title="Past Events"
        left={props => <Text></Text>}/>
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
      <Card.Title style={styles.newscard}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:16, fontWeight:'bold',paddingLeft:50,}}
      subtitleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'bold',paddingLeft:50,}}
        title="Clubs & Coches Prepare For"
        subtitle="14 hr | England"
        
        left={(props) => <Card.Cover style={styles.cardimage} source={{ uri: 'https://picsum.photos/700' }} />} 
      />
   <View style={styles.sidePadding}>
      <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
      />
              <DropDown
          label={"Gender"}
          mode={"outlined"}
          value={gender}
          setValue={setGender}
          list={genderList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
        
        <List.Item style={styles.borderClubs}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item style={styles.borderClubs}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Premier Club"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.ShieldOrange}/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item style={styles.borderClubs}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.clubsShield}/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item style={styles.borderClubs}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Premier Club"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.ShieldOrange}/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />

      <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={onCreateevent}
          />
         </View>
          <Button onPress={showDialog3}>Event Modal</Button>
        <Dialog visible={visible3} onDismiss={hideDialog3} >
    <Dialog.ScrollArea>
    <ScrollView >
        <List.Icon icon="close" />
          <List.Item
          titleStyle={{fontSize:16,fontWeight:'bold',color:"#000"}}
          descriptionStyle={{fontSize:16,fontWeight:'bold',color:"#000"}}
          title="Norfolk Summer"
          description="Batminton Event 2021"
          right={props => <List.Icon {...props} style={styles.bookalt} icon="bookmark-outline" />}
          
          />
      <Card.Cover style={styles.eventcardimg} source={{ uri: 'https://picsum.photos/700' }} />
      <Text>My Clubs</Text> 
      <Card style={styles.cardevent}>
        <List.Item style={styles.cardtitle}
        titleStyle={{fontSize:14,color:"#000"}}
          title="7-9 Tomarrow,23 April"
          left={(props) => <List.Icon {...props} icon="location"/>}
          />
        <List.Item style={styles.cardtitle}
        titleStyle={{fontSize:14,color:"#000"}}
          title="7-9 Tomarrow,23 April"
          left={(props) => <List.Icon {...props} icon="clock"/>}
          />
        <List.Item style={styles.cardtitle}
        titleStyle={{fontSize:14,color:"#000"}}
          title="7-9 Tomarrow,23 April"
          left={(props) => <List.Icon {...props} icon="phone"/>}
          />
        <List.Item style={styles.cardtitle}
        titleStyle={{fontSize:14,color:"#000"}}
          title="7-9 Tomarrow,23 April"
          left={(props) => <List.Icon {...props} icon="mail"/>}
          />
        <List.Item style={styles.cardtitle}
        titleStyle={{fontSize:14,color:"#000"}}
          title="7-9 Tomarrow,23 April"
          left={(props) => <List.Icon {...props} icon="user"/>}
          right={(props) => <Avatar.Icon size={24} icon="mail" />}
          />
          </Card>
  <Text>Event Description</Text> 
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ullamcorper enim. Sed in vehicula sem. Nam varius eros mauris, vitae finibus leo consequat at. Sed odio lacus, facilisis ut turpis a, eleifend laoreet elit. Maecenas condimentum eleifend venenatis. Suspendisse interdum erat ipsum, pharetra pellentesque libero tristique quis.</Paragraph> 
      <Button  mode="contained" onPress={hideDialog3}>
             Join
      </Button>
      </ScrollView>
    </Dialog.ScrollArea>
    </Dialog>
</>
  );
};

export default Events;