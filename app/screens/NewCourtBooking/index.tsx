import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { ILoginState } from 'app/models/reducers/login';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';





interface IState {
  loginReducer: ILoginState;
}

const NewCourtBooking: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onClubsetup = () => NavigationService.navigate('Clubsetup');


  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  

  
  const sheetRef = React.useRef(null);
  return (
    <ScrollView>
      
      <CalendarStrip style={{ paddingTop: 12, marginTop: 15, paddingBottom:12, borderColor:'#aaa', borderTopWidth:1, borderBottomWidth:1 }} />
  
      <Text style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Select Club Type *</Text>     
<View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>

  <Chip   style={{ marginTop:10,paddingLeft:10 ,backgroundColor:"red",borderWidth:1,borderColor:"#ccc"}} >Court 1</Chip>
  <Chip  style={{ marginTop:10,paddingLeft:10 ,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}}  >Court 2</Chip>
  <Chip   style={{ marginTop:10, paddingLeft:10 ,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}}  >Court 3</Chip>
  <Chip   style={{ marginTop:10, paddingLeft:10 ,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}}  >Court 4</Chip>


</View>
 
<View>
  <Text  style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Venue</Text>
  </View>
  <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>
 <TextInput style = {styles.inputs}  
           label= "Enter Post Code"
           mode='outlined'
               underlineColorAndroid = "transparent"
               placeholder = "Venue post code"
               placeholderTextColor = "black"
               autoCapitalize = "none"
              />

    <Button mode="contained"  style = {{   height:40, paddingTop:2,
   marginTop:15,backgroundColor:'#CF3918', color:'white'}}  >
    Find Address
    </Button>
</View>    

    <View> 
    <Text  style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Venue Address</Text>
    <DropDown style = {styles.inputsfull}
          label={"Select an address from the list"}
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
        </View> 
<View style = {styles.heightselect} > 
<Text  style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Admin's Message To The Group</Text>
    <TextInput style = {styles.inputsfull}
         mode='outlined'  
    label= "Enter Message"
    underlineColorAndroid = "transparent"
    placeholder = "Select Club"
    placeholderTextColor = "black"
    autoCapitalize = "none"
    > 
      </TextInput>
     
    </View>  
    <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap'}}>
    <Button  mode="contained" onPress={() => console.log('Pressed')}
    style={{ width:150,marginLeft:40,marginTop:40}}>
    SAVE & Add NEW
  </Button>
  <Button mode="contained" onPress={() => console.log('Pressed')}
    style={{ width:150,marginLeft:40,marginTop:40}}>
    SAVE
  </Button>
    </View> 



   </ScrollView>   
   
  );
};

export default NewCourtBooking;
