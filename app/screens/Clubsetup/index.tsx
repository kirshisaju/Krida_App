import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
//import SelectDropdown from 'react-native-select-dropdown'
import Swiper from 'react-native-swiper';
import Colorsetup from '../Colorsetup';
import Logosetup from '../Logosetup';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import BottomSheet from 'reanimated-bottom-sheet';
import MemberShipDrawer from 'app/screens/membershipdrawer';
import AddMemberDrawer from 'app/screens/Addmemberdrawer';
import { blue600 } from 'react-native-paper/lib/typescript/styles/colors';




interface IState {
  loginReducer: ILoginState;
}

const Clubsetup: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visible1, setVisible1] = React.useState(false);
  const showDialog1 = () => setVisible1(true);
  const hideDialog1= () => setVisible1(false);
  const [text, setText] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2= () => setVisible2(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
 

  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  const renderContent = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
      
    }}
  >
<MemberShipDrawer/>
  </View>
  );
  const sheetRef1 = React.useRef(null);
  const renderContent1 = () => ( 
    <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      height: 1000,
      width:"100%",
      
    }}
  >
<AddMemberDrawer/>
  </View>
  );
  const sheetRef = React.useRef(null);
  return (
    <ScrollView>

<Swiper style={{height:750}} showsHorizontalScrollIndicator={true}  showsButtons={false} 
activeDotStyle={{backgroundColor:'red',width:50,height:5}}  
dotStyle={{width:50,height:5}}
paginationStyle={{bottom: undefined, left: undefined, top:10,paddingRight:70,marginTop:30 }} >
      <View style={styles.container} >

      <Image style={{marginTop:80,marginBottom:15}} source={require('../../assets/security_black.png')} />
      <View>
<Text  style={styles.mttext}>Now lets Finish Setup Your Clubs</Text>
      </View>


<Card.Title style={styles.cardtitlepad}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'600',paddingLeft:20,}}
      title="General Information"
      left={(props) =>   <Badge
        style={{ position: 'absolute',backgroundColor:'#000537',height:30,width:30 ,borderRadius:50,fontSize:20,fontWeight:'bold',paddingTop:5,paddingLeft:0}}> 1</Badge>} 
      right={(props) => <Text style={{fontSize:14, fontWeight:'600',}}>Completed</Text>} 
      />
      <Card.Title style={styles.cardtitlepad}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'600',paddingLeft:20,}}
      title="Logo & Design"
      left={(props) =>   <Badge
        style={{ position: 'absolute',backgroundColor:'#ccc',height:30,width:30 ,borderRadius:50,fontSize:20,fontWeight:'bold',paddingTop:5,paddingLeft:0,}}> 2</Badge>} 
      right={(props) => <Text style={{fontSize:14, fontWeight:'600',}}>1 min</Text>} 
      />
      <Card.Title style={styles.cardtitlepad}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'600',paddingLeft:20,}}
      title="Membership"
      left={(props) =>   <Badge
        style={{ position: 'absolute',backgroundColor:'#ccc',height:30,width:30 ,borderRadius:50,fontSize:20,fontWeight:'bold',paddingTop:5,paddingLeft:0,}}> 3</Badge>} 
      right={(props) => <Text style={{fontSize:14, fontWeight:'600',}}>4 min</Text>} 
      />
      <Card.Title style={styles.cardtitlepad}
      titleStyle={{color: "rgba(0,0,0,0.7)", fontSize:14, fontWeight:'600',paddingLeft:20,}}
      title="Settings"
      left={(props) =>   <Badge
        style={{ position: 'absolute',backgroundColor:'#ccc',height:30,width:30 ,borderRadius:50,fontSize:20,fontWeight:'bold',paddingTop:5,paddingLeft:0,}}> 4</Badge>} 
      right={(props) => <Text style={{fontSize:14, fontWeight:'600',}}>5 min</Text>} 
      />
      <Grid>
        <Col style={{paddingHorizontal:20,marginTop:20}}>
      <Button style={styles.bgclr}>Continue</Button>
      </Col>
      </Grid>
      <>
      
      
      </>
      </View>
      <>
      <View style={styles.padbg}>
      <Text  style={{fontSize:14,color:'#000537',marginTop:20,fontWeight:"600"}}>Club Logo Design</Text>
        <List.Item style={styles.borderClubs}    onPress={showDialog1}
            titleStyle={{fontSize:16,color:'#000',opacity:.90,paddingTop:8}}
            title="Pick a logo"
            left={props =>  <Avatar.Icon size={24} icon="plus" style={styles.clubsShield}/>}
            right={props => <List.Icon {...props} icon="chevron-right"  />}
        />
        <List.Item style={styles.borderClubs} onPress={showDialog2}
            titleStyle={{fontSize:16,color:'#000',opacity:.90,paddingTop:8}}
            title="Pick a Color"
            left={props =>  <Avatar.Icon size={24} icon="plus" style={styles.clubsShield}/>}
            right={props => <List.Icon {...props} icon="chevron-right"    />}
        />
        <Text  style={{fontSize:14,color:'#000537',marginTop:30,fontWeight:"700",}}>Club Logo Preview</Text>
        <List.Item style={styles.borderClubs}
            titleStyle={{fontSize:16,fontWeight:"600",marginTop:5}}
            descriptionStyle={{fontSize:10,}}
            title="Premier Club"  
            description="Batminton - social Club"
            left={props =>  <Avatar.Icon size={24} icon="shield" style={styles.clubsShields}/>}
        />

        <Button style={styles.bgcont}>Continue</Button>
      </View>
      </>
      <>
        <View style={styles.padbg}>
        <Text  style={{fontSize:14,color:'#000537',marginTop:40,fontWeight:"600"}}>Add Members</Text>
      <Grid >
        <Col size={10} style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image  style={{marginTop:45,}} source={require('../../assets/Group319.png')} />
          <Text style={styles.buttonText}>From</Text>
          <Text style={styles.buttonText2}>Phone</Text>
        </Col>
        <Col size={10} style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image  style={{marginTop:45,}} source={require('../../assets/facebook(3).png')} />
          <Text style={styles.buttonText}>From</Text>
          <Text style={styles.buttonText2}>Facebook</Text>
        </Col>
        <Col size={10} style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{marginTop:45,}} source={require('../../assets/search(2).png')} />
          <Text style={styles.buttonText}>From</Text>
          <Text style={styles.buttonText2}>Google</Text>
        </Col>
        <Col size={10} style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{marginTop:45,}} source={require('../../assets/Group-686.png')} />
          <Text style={styles.buttonText}>From</Text>
          <Text style={styles.buttonText2}>krida</Text>
        </Col>
        <Col size={10} style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{marginTop:45,}} source={require('../../assets/Group-846.png')} />
          <Text style={styles.buttonText}>Add</Text>
          <Text style={styles.buttonText2}  onPress={() => sheetRef1.current.snapTo(0)} >One-by-one</Text>
        </Col>
      </Grid>




     

    <View  style={styles.barbottom}>
    <Text  style={{fontSize:14,color:'#000537',marginTop:20,fontWeight:"600"}}>Membership</Text>
        <Paragraph style={{fontSize:12,color:'#000537',}} onPress={() => sheetRef.current.snapTo(0)} >Please Add Member First</Paragraph>
    </View>
        <List.Item style={{borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Carasynthia Dune"
        descriptionStyle={{color:"#CF3918",fontSize:12}}
        description="Add Membership"
        left={props =>  <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} />}
        right={props =><></>}/>
        <List.Item style={{borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Carasynthia Dune"
        descriptionStyle={{color:"#CF3918",fontSize:12}}
        description="Add Membership"
        left={props =>  <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} />}
        right={props =><></>}/>
        <List.Item style={{borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10}}
        titleStyle={{fontSize:16, paddingBottom:5, fontWeight:'bold'}}
        title="Carasynthia Dune"
        descriptionStyle={{color:"#CF3918",fontSize:12}}
        description="Add Membership"
        left={props =>  <Avatar.Image size={45} source={require('../../assets/NoPath1.png')} />}
        right={props =><></>}/>

    <View  style={{marginTop:60}}>
    <Button style={styles.bgclr}>Continue</Button>
    </View>
    </View>
    </>
    <View style={styles.padbg}>
    <Text style={{marginTop:30,fontSize:14,fontWeight:"700"}}>Club Settings</Text>
          <List.Item style={{marginTop:20,borderBottomWidth:1,borderBottomColor:"#ccc",paddingBottom:15}}
              titleStyle={{fontSize:12, fontWeight:'bold' }}
              title="Searchable ,Visible is Public"
              descriptionStyle={{fontSize:10,  }}
              description="Anyone Can Search The Club And Request To Join"
              right={props =>      <Switch
              trackColor={{ false: "#red", true: "green" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="red"
              value={isEnabled}
              />}
          />
          <List.Item style={{marginTop:5,borderBottomWidth:1,borderBottomColor:"#ccc",paddingBottom:15}}
              titleStyle={{fontSize:12, fontWeight:'bold' }}
              title="Searchable ,Visible is Public"
              descriptionStyle={{fontSize:10,  }}
              description="Anyone Can Search The Club And Request To Join"
              right={props =>      <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="red"
              value={isEnabled1}
              />}
          />
          <View  style={{marginTop:180}}>
    <Button style={styles.bgclr}>Done</Button>
    </View>
    </View>
    </Swiper>
    <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent}
      />
    <BottomSheet
              ref={sheetRef1}
              snapPoints={[450, 300, 0]}
              borderRadius={10}
              initialSnap={2}
              renderContent={renderContent1} 
      />
        <Dialog visible={visible1} onDismiss={hideDialog1}>
            <Logosetup/> 
        </Dialog>

        <Dialog visible={visible2} onDismiss={hideDialog2}>
            <Colorsetup/>
        </Dialog>
       
   </ScrollView>   
   
  );
};

export default Clubsetup;
