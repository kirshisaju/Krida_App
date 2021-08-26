import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
//import SelectDropdown from 'react-native-select-dropdown'
import Swiper from 'react-native-swiper';
import { SceneMap, TabView } from 'react-native-tab-view';





interface IState {
  loginReducer: ILoginState;
}

const AddMemberDrawer: React.FC = () => {
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
  const [index, setIndex] = React.useState(0);

  const [gender, setGender] = React.useState();
  const FirstRoute = () => (
  
    <View>
    <Text>dfghgfd</Text>
    </View>

);


{/* Clubs */}
const SecondRoute = () =><Text>dfghgfd</Text> ;

{/* Events */}

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    
  });
  const [routes] = React.useState([
    { key: 'first', title: 'Pick A Logo' },
    { key: 'second', title: 'Upload Logo' },

  ]);

  
  return (
    <ScrollView>
<List.Item 
    titleStyle={{fontSize:18, fontWeight:'bold',color:"#000537"}}
    title="Add Member"
    left={props =>  <List.Icon {...props} icon="chevron-left" />}
    
  />
<View style = {styles.heightselect} > 
    <TextInput style = {styles.input}  
    label= "Enter Full Name"
    placeholder = "Select Club"
    >
   
      </TextInput>
      </View>
      <View style = {styles.heightselect} > 
    <TextInput style = {styles.input}  
    label= "Enter Email Address"
    underlineColorAndroid = "transparent"
    placeholder = "  style = {styles.input}  "
    >  
      </TextInput>
     
    </View>  
    <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>
 <TextInput style = {styles.inputcou}
           label= "+91"
               underlineColorAndroid = "transparent"
               placeholder = "91"
               placeholderTextColor = "black"
               autoCapitalize = "none"
              />

<TextInput style = {styles.inputpho}  
           label= "9655210900"
               underlineColorAndroid = "transparent"
               placeholder = "987654566"
               placeholderTextColor = "black"
               autoCapitalize = "none"
              />
</View> 
    <View  style={{flex: 1, flexDirection: 'row', marginTop:40}}>
      <View>
        <Button style = {styles.inputaddnew}  > DONE & ADD NEW</Button>
      </View>
      <View>
       <Button style = {styles.inputdone}  > DONE</Button>
      </View>
    </View> 
   </ScrollView>   
   
  );
};

export default AddMemberDrawer;
