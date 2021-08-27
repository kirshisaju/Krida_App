import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, FAB, Portal,Searchbar } from 'react-native-paper';
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

const ViewCourtBooking: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog= () => setVisible(false);
  const [text, setText] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2= () => setVisible2(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [gender, setGender] = React.useState();

  const UserType = [
    { label: "All", value: "All" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  const UserStatus = [
    { label: "All", value: "All" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  const sheetRef = React.useRef(null);
  return (
    <ScrollView>
      <View style={{paddingHorizontal:15, paddingBottom:20,backgroundColor:'#fff'}}>
      <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
        <View style={{width: '20%', }}>
          <List.Icon  icon="close" />
        </View>
        <View style={{width: '50%', }}>
          <Text style={{color:'#000537',fontSize:16,fontWeight:'700',margin:0,paddingTop:5}}>View Booking</Text>
          <Paragraph style={{fontSize:14,fontWeight:'700',margin:0}}>Court Booking #42</Paragraph>
        </View>
        <View style={{width: '15%', }}>
        <Avatar.Icon size={40} icon="pencil" style={{color:"#fff",backgroundColor:"#E75333"}} />
        </View>
        <View style={{width: '15%', }}>
        <List.Icon  icon="share-variant" style={{color:"#E75333",backgroundColor:"#fff",margin:0,paddingTop:0}} />
        </View>
      </View>
      <View style={styles.shadows}>
   <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{marginTop:20,width:"50%",}}>
    <Text  style={{fontSize:12, color:"#000537",paddingLeft:15,}}>Check
    </Text>
    <Switch style={styles.tooglecustom}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
 
      />
      </View>
      <View style={{width:"25%",alignItems: 'flex-end'}}>
          <List.Icon  icon="cloud"  style={{paddingLeft:16}}/>
          <View style={styles.tooglecustomright}>
            <Text style={{color:'#000537',fontSize:18,}}>3°c</Text>
            <Text style={{color:'#000537',fontSize:10,}}>Raining</Text>
          </View>
      </View> 
   </View>

         <List.Item 
         titleStyle={{fontSize:12, color:"#121858"}}
           title="7-9 am Tomarrow 30 August"      
           left={props =>  <List.Icon  icon="calendar" />}
           right={props => <List.Icon {...props} icon="chevron-right" style={{marginTop:8}} />}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="Sportspark University"  
           description="universe in action"    
           left={props =>  <List.Icon  icon="navigation" />}
           right={props => <><Text style={{fontSize:10, color:"#CF3918",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>View in maps </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:8}} /></>}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="7-9 am Tomarrow 30 August"      
           left={props =>  <List.Icon  icon="crop" />}
           right={props => <><Text style={{fontSize:10, color:"#CF3918",justifyContent: 'center',
           alignSelf: 'center',
           alignItems:'center',marginLeft:4}}>View Matches </Text><List.Icon {...props} icon="chevron-right" style={{marginTop:8}} /></>}
         />
        <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="Court Blocked"   
           description="1-5-8-9"       
           left={props =>  <List.Icon  icon="door" />}
         
         />
         <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',marginTop:10,marginLeft:15}}>
           <View>
           <List.Icon  icon="crop" style={{padding:0,margin:0}}/>
           </View>
           <View style={{marginRight:5}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath1.png')} />
           </View>
           <View style={{marginRight:5}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath2.png')} />
           </View>
           <View style={{marginRight:5}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath3.png')} />
           </View>
           <View style={{marginRight:5}}>
           <Avatar.Image size={40} source={require('../../assets/NoPath4.png')} />
           </View>
           <View>
           <Avatar.Image size={40} source={require('../../assets/NoPath5.png')} />
           </View>
         </View>
         <List.Item style={{marginTop:0,paddingTop:0}}
           title="Manage Section players"   
           titleStyle={{fontSize:10, marginLeft:130,color:'#CF3918' }}
           right={props => <List.Icon {...props} icon="chevron-right"></List.Icon>}
         />
         <List.Item 
        titleStyle={{fontSize:12, color:"#121858"}}
           title="Don’t forget to bring masks!"   
           left={props =>  <List.Icon  icon="message-processing-outline" />}
         
         />
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginTop:20,marginLeft:0,paddingLeft:0 }}>
        <View style={{width: '20%',marginLeft:0,paddingLeft:0 }}>
          <List.Icon  icon="close" />
        </View>
        <View style={{width: '80%', }}>
          <Text style={{color:'#000537',fontSize:16,fontWeight:'700',margin:0,paddingTop:5}}>Expense</Text>
          <Paragraph style={{fontSize:14,fontWeight:'500',margin:0,opacity:.5}}>Court Booking #65</Paragraph>
        </View>
      </View>
      <View style={{borderWidth:1,borderColor:'#ccc', padding:10,borderRadius:7,marginBottom:10,marginTop:10}}>
      <Text style={{color:'#000537',fontSize:16,marginBottom:10,fontWeight:'bold'}}>Court Booking</Text>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",marginBottom:0}}>
      <View style={{width:"25%", }}> 
      <Avatar.Icon size={60} icon="door-open" style={{backgroundColor:'#27BA9E',color:'#fff',marginTop:15}}/>
      </View>
      <View style={{width: "75%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:20,fontWeight:'bold'}}>£34</Text>
      <Paragraph style={{color:'#000537',fontSize:12,margin:0,padding:0}}>6 Jan 2021</Paragraph>
      <Paragraph style={{color:'#000537',fontSize:12,margin:0,padding:0}}>Paid by: Mando</Paragraph>
      </View>
      </View>
      </View>

      <Text style={{color:'#000537',fontSize:12,marginBottom:15,marginTop:10}}>Expense Against</Text>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:14,textAlign:'right'}}>-£8.5</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:14,textAlign:'right'}}>-£8.5</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:14,textAlign:'right'}}>-£8.5</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:14,textAlign:'right'}}>-£8.5</Text>
      </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row',marginTop:20,marginLeft:0,paddingLeft:0,paddingBottom:0 }}>
        <View style={{width: '20%',marginLeft:0,paddingLeft:0 }}>
          <List.Icon  icon="close" />
        </View>
        <View style={{width: '80%', }}>
          <Text style={{color:'#000537',fontSize:16,fontWeight:'700',margin:0,paddingTop:5}}>Club Members</Text>
          <Paragraph style={{fontSize:14,fontWeight:'500',margin:0,opacity:.5}}>Total #85</Paragraph>
        </View>
      </View>
      <View style={{paddingTop:0}}>
        <Searchbar style={{marginTop:0,elevation: 0, borderBottomColor:'#ddd', borderBottomWidth:2,width:"100%"}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginTop:15,marginBottom:10}}>
        <View style={{width: '48%',}} >
          <DropDown style = {styles.inputsfull}
            label={"User Type"}
            mode={"outlined"}
            value={gender}
            setValue={setGender}
            list={UserType}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={"menu-down"} />,
            }}
          />
        </View>
        <View style={{width: '48%',marginLeft:5}} >
          <DropDown style = {styles.inputsfull}
            label={"User Status"}
            mode={"outlined"}
            value={gender}
            setValue={setGender}
            list={UserStatus}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={"menu-down"} />,
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',paddingBottom:10,}}>
      <View style={{width: "100%",paddingTop:20,}}>
      <Text style={{color:'#707070',fontSize:12,textAlign:'right'}}>Swipe left to update / deactivate member</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:12,textAlign:'right'}}>Admin</Text>
      <Text style={{color:'#009C10',fontSize:12,textAlign:'right'}}>Active</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:12,textAlign:'right'}}>Player</Text>
      <Text style={{color:'#9A9A9A',fontSize:12,textAlign:'right'}}>Inactive</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,marginBottom:10}}>
      <View style={{width:"20%", }}> 
      <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
      </View>
      <View style={{width: "60%", paddingTop:10}}>
      <Text style={{color:'#000537',fontSize:14,fontWeight:'bold'}}>Ahsoka Tano</Text>
      <Paragraph style={{color:'#000537',fontSize:12,}}>@caras</Paragraph>
      </View>
      <View style={{width: "20%",paddingTop:20,}}>
      <Text style={{color:'#000537',fontSize:12,textAlign:'right'}}>Player</Text>
      <Text style={{color:'#009C10',fontSize:12,textAlign:'right'}}>Active</Text>
      </View>
      </View>
      <View style={{paddingVertical:30,marginBottom:20}}>
        <FAB style={styles.fab}  small icon="plus"  />
      </View>
   


   <View style={{flex: 1, flexDirection: 'row',marginTop:20,marginLeft:0,paddingLeft:0,paddingBottom:0 }}>
        <View style={{width: '20%',marginLeft:0,paddingLeft:0 }}>
          <List.Icon  icon="close" />
        </View>
        <View style={{width: '80%', }}>
          <Text style={{color:'#000537',fontSize:16,fontWeight:'700',margin:0,paddingTop:5}}>New Expense</Text>
          <Paragraph style={{fontSize:14,fontWeight:'700',margin:0,}}>Expense #321</Paragraph>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginTop:10,marginBottom:20}}>
        <View style={{width: '100%',}} >
          <DropDown style = {styles.inputsfull}
            label={"User Type"}
            mode={"outlined"}
            value={gender}
            setValue={setGender}
            list={UserType}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={"menu-down"} />,
            }}
          />
        </View>
      </View>
      <View style = {{marginBottom:20}} > 
        <TextInput style = {styles.inputexpen}
          mode='outlined'  
          label= "Date"
          underlineColorAndroid = "transparent"
          placeholder = "26 Mar 2021"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
        <List.Icon style = {styles.backicon} icon="calendar" />
      </View>
      <View style = {{marginBottom:20}} > 
        <TextInput style = {styles.inputexpen}
          mode='outlined'  
          label= "Total Expense(£)"
          underlineColorAndroid = "transparent"
          placeholder = "34"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
      </View>
      <View style={{width: '100%',}} >
          <DropDown style = {styles.inputsfull}
            label={"User Type"}
            mode={"outlined"}
            value={gender}
            setValue={setGender}
            list={UserType}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={"menu-down"} />,
            }}
          />
        </View>
        <Text style={{color:'#000537',fontSize:12,marginTop:20,padding:0}}>Expense Against</Text>
        <Text style={{color:'#CF3918',fontSize:14,marginTop:5,padding:0}}>Add Members</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}}/>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}}/>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}}/>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath4.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}}/>
          </View>
        </View>
        <View  style={{flex: 1, flexDirection: 'row', marginTop:40}}>
          <View>
            <Button style = {styles.inputaddnew}  > SAVE & add new</Button>
          </View>
          <View>
          <Button style = {styles.inputdone}  > SAVE</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewCourtBooking;
