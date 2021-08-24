import React from 'react';

import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';


import Slider from '@react-native-community/slider';
import DropDown from 'react-native-paper-dropdown';
import { Col, Grid } from 'react-native-easy-grid';
interface IState {
  loginReducer: ILoginState;
}

const Myclubs: React.FC = () => {

  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onNewClub = () => NavigationService.navigate('NewClub');
  const onClubdetail = () => NavigationService.navigate('Clubdetail');
  const onClubsetup = () => NavigationService.navigate('Clubsetup');
  const onSearchClub = () => NavigationService.navigate('SearchClub');

  const [visibles, setVisibles] = React.useState(false);
  const showDialog2 = () => setVisibles(true);
  const hideDialog2= () => setVisibles(false);
  const [text, setText] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const [gender, setGender] = React.useState();
  const genderList = [
    { label: "Please Select", value: "Please Select" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  return (
    
    <>
        <ScrollView>
    <View style={styles.sidePadding}>
     
     <Searchbar style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    /> 
    <Text style={styles.clubs}>My Clubs</Text>  
     <List.Item style={styles.borderClubs} onPress={onClubdetail}
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
          onPress={onNewClub}
        /> 
        <>
        <Dialog visible={visibles} onDismiss={hideDialog2}>
      <>
      <View style={styles.sidePadding}>
   <TextInput
   label="Club Name"
   value={text}
   onChangeText={text => setText(text)}
   />
   
         <TextInput
             label="Club Address"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput
             label="Club Date"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput
             label="Club Email Address"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput
             label="Club Post Code"
             value={text}
             onChangeText={text => setText(text)}
             />
         <TextInput
             label="Country Code"
             value={text}
             onChangeText={text => setText(text)}
             />
       <Text >Select Club Type</Text>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
           <Button  mode="contained" onPress={hideDialog2}>
           Continue
           </Button>
           </View>
           </>
          
         
           </Dialog>
           </>
           </View>
           </ScrollView>
    </>

  );
};

export default Myclubs;