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

const MembershipDrawer: React.FC = () => {
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
  const genderList = [
    { label: "Social Club", value: "Social Club" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  

  
  return (
    <ScrollView  >
<View >  
<List.Item 
    titleStyle={{fontSize:18, fontWeight:'bold',color:"#000537"}}
    title="Add Membership"
    left={props =>  <List.Icon {...props} icon="chevron-left" />}
    
  /><View > 
      <DropDown  style = {styles.input}  
          label={"Social Club"}
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
        </View > 
      <Text style={{ fontSize:14 ,paddingTop:30,fontWeight:'bold',color:"#000537"}} >Role*</Text>  
      <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>       
      <Chip style={{ marginTop:20}} >Player</Chip>
      <Chip   style={{ marginTop:20,marginLeft:10}} >Admin</Chip>
      
      </View>
      </View>
   </ScrollView>   
   
  );
};

export default MembershipDrawer;
