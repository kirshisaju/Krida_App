import React, { useState } from 'react';
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




interface IState {
  loginReducer: ILoginState;
}

const NextSection: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const [isEnabled, setIsEnabled] = useState(false);
  
  


  return (
   
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
         <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',marginTop:20,marginLeft:20}}>
           <View>
           <List.Icon  icon="crop" />
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
</View>

  );
};

export default NextSection;
