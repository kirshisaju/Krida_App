import React from 'react';

import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Text, Title, Dialog, Provider, Portal, Paragraph, Switch, DataTable, List, Searchbar, FAB, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import CalendarStrip from 'react-native-calendar-strip';
import navigation from 'app/navigation/';

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
        <View>
          <Searchbar style={styles.searched}
            placeholder="Search for clubs around me"
            onChangeText={onChangeSearch}
            value={searchQuery} />
        </View>
        <Grid style={{marginVertical:10, }}>
          <Col  size={15}>
          <Text style={{color:'#000',fontSize:10,paddingTop:10}}>0 miles</Text>
          </Col>
          <Col  size={70}>
          <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#E75333"
          maximumTrackTintColor="#E75333"
      />
          </Col>
          <Col size={15}>
          <Text  style={{color:'#000',fontSize:10,paddingTop:10}}>25 miles</Text>
          </Col>
        </Grid>
        
        <View style={styles.dropdownlist}> 
        <DropDown 
         mode='outlined'
          label={"Club Type"}
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
        </View>
        <Grid>
          <Col size={75} >
            <Text style={{marginVertical:20, fontSize:14, fontWeight:'bold'}}>Top 5 clubs around me</Text>
          </Col> 
          <Col size={25} >

          </Col>
        </Grid>
        <View style={{paddingBottom:20}}>
        <List.Item style={styles.borderbot}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Mighty Eagles"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <><Text style={{fontSize:10, color:"#000537",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:14}}>0.6m </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:14}} /></>}
         />
      <List.Item style={styles.borderbot}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Premier Club"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldyellow]} size={34} icon="shield" />}
        right={props => <><Text style={{fontSize:10, color:"#000537",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>0.8m </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:14}} /></>}
         />
         <List.Item style={styles.borderbot}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Premier Club"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldgreen]} size={34} icon="shield" />}
        right={props => <><Text style={{fontSize:10, color:"#000537",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>0.8m </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:14}} /></>}
         />
         <List.Item style={styles.borderbot}
       titleStyle={{fontSize:15, fontWeight:'bold'}}
        title="Premier Club"
        description="SpartSpark University Of East"
        left={props =>  <Avatar.Icon style={[styles.shield,styles.shieldpink]} size={34} icon="shield" />}
        right={props => <><Text style={{fontSize:10, color:"#000537",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>0.8m </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:14}} /></>}
         />
</View>
        <Grid style={{marginTop:10,  borderRadius: 9,  padding:10,}}>
            <Col size={15} >
            <Avatar.Icon style={[styles.shieldview,styles.shieldgreen]} size={34} icon="shield" />
              </Col>
              <Col size={85} style={{marginLeft:10,}}>
              <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Premier Club</Text>
              <Paragraph style={{color:'#000537',fontSize:12,marginBottom:0}}>Badminton - Social club</Paragraph>
              <Paragraph style={{color:'#000537',fontSize:10,opacity:.5,marginTop:0}}>Norwich, UK</Paragraph>
              </Col>
        </Grid> 
        <Grid style={[styles.borderClubs,styles.marginzero]}>
            <Col size={33}>
              <Text style={{color:'#000537',fontSize:24,fontWeight:'bold',textAlign:'center'}}>85</Text>
              <Paragraph style={{color:'#000537',fontSize:14,marginBottom:0,textAlign:'center',opacity:.5}}>Members</Paragraph>
            </Col>
            <Col size={33} style={{marginLeft:10,}}>
              <Text style={{color:'#000537',fontSize:24,fontWeight:'bold',textAlign:'center',}}>720</Text>
              <Paragraph style={{color:'#000537',fontSize:14,marginBottom:0,textAlign:'center',opacity:.5}}>Sessions</Paragraph>
            </Col>
            <Col size={33} >
              <Text style={{color:'#000537',fontSize:24,fontWeight:'bold',textAlign:'center',}}>6.5k</Text>
              <Paragraph style={{color:'#000537',fontSize:14,marginBottom:0,textAlign:'center',opacity:.5}}>Matches</Paragraph>
            </Col>
        </Grid> 
      <View style={styles.borderClubs}>
         <List.Item 
         titleStyle={{fontSize:12, color:"#121858"}}
           title="Sportspark University of East,"  
           description="Norwich NR4 7TJ"    
           left={props =>  <List.Icon  icon="navigation" />}
           right={props => <><Text style={{fontSize:10, color:"#CF3918",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>View in Map </Text></>}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="Schedule: 7:00 AM - 9:00 AM, Weekends"  
           left={props =>  <List.Icon  icon="calendar" />}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
        
           title="+44 7896541230 "      
           left={props =>  <List.Icon  icon="phone" />}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="admin@premierclub.co.uk"   
           left={props =>  <List.Icon  icon="mail" />}
         
         />
         
         <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',marginTop:20,marginLeft:10}}>
           <View>
           <List.Icon  icon="crop" />
           </View>
           <View style={{marginRight:10}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath1.png')} />
           <Text style={{color:"#000537",fontSize:12,textAlign:'center',marginTop:10}}>Steve</Text>
           </View>
           <View style={{marginRight:10}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath2.png')} />
           <Text style={{color:"#000537",fontSize:12,textAlign:'center',marginTop:10}}>Mike</Text>
           </View>
           <View style={{marginRight:5}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
           <Text style={{color:"#000537",fontSize:12,textAlign:'center',marginTop:10}}>Sarah</Text>
           </View>
         </View>
         
</View>
<Text style={{marginTop:25, fontSize:14, fontWeight:'bold',marginBottom:10}}>About Us</Text>
<Paragraph style={{color:'#000537',fontSize:12,marginBottom:0,}}>The club and has flourished in the town since it was founded in 1947. The facilities used by the club up to September 1971 was the Town Hall, then the club moved to the Sports Barn at Hadleigh High School (Hadleigh High Leisure Centre) when the school first opened, where it has been to the present day. In 1974 permission was granted for the shield of the town's Coat of Arms to be incorporated in the design of a new badge for the club, making the club unique to Hadleigh.</Paragraph>
<List.Item title=""
        description=""
        left={props => <></> }
        right={props => <Text style={{color:'#CF3918',fontSize:12,textAlign:'right'}}>Show more </Text>}
      />
<Button style={styles.submit}> Submit</Button>
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