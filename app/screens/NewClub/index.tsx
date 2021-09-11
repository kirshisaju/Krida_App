import React, {useEffect} from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { IClubState } from 'app/models/reducers/club';
import NavigationService from 'app/navigation/NavigationService';
import { Col, Grid, Row } from 'react-native-easy-grid';
import DropDown from 'react-native-paper-dropdown';
import { color } from 'react-native-reanimated';
//import SelectDropdown from 'react-native-select-dropdown'
import * as ClubActions from 'app/store/actions/ClubActions';
import { Formik } from 'formik';

interface IState {
  clubReducer: IClubState;
}

const NewClub: React.FC = () => {
 // const id = useSelector((state: IState) => state.clubReducer.id);
  
  const dispatch = useDispatch();
  const [visibles, setVisibles] = React.useState(false);
  const showDialog2 = () => setVisibles(true);
  const hideDialog2= () => setVisibles(false);
  const [text, setText] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onClubsetup = () => NavigationService.navigate('Clubsetup');

  const onCubCreate = ( club:any ) => dispatch(ClubActions.clubcreate(club));

  const [gender, setGender] = React.useState();

  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  
  return (
    <ScrollView>
    <View style={styles.sidePadding}>
    <View>
      <Text  style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Basic Club Details</Text>
    </View>
    <Formik
     initialValues={{ club_name: '', postal_code :'' }}
     onSubmit={values => onCubCreate(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <>
    <TextInput  style = {styles.inputsfull}
        label= "Club Name" 
        mode='outlined'
        underlineColorAndroid="transparent"
        underlineColor="transparent"
        placeholder = "Enter club name"     
        onChangeText={handleChange('club_name')}
        onBlur={handleBlur('club_name')}
        value={values.club_name}
    />
    
    <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap'}}>

    <TextInput style = {styles.inputs} label= "Club Post Code" mode='outlined'
      underlineColorAndroid = "transparent"
      placeholder = "Enter post code"
      placeholderTextColor = "black"
      autoCapitalize = "none"
      onChangeText={handleChange('postal_code')}
      onBlur={handleBlur('postal_code')}
      value={values.postal_code}
    />

    <Button mode="contained"  style = {{   height:40, paddingTop:2, marginTop:15,backgroundColor:'#CF3918', color:'white'}}  >
    Find Address
    </Button>
</View>    
  <View> 
    <TextInput  style = {styles.inputsfull}
       mode='outlined' 
    label= "Simple Textual Inputs"
    underlineColorAndroid = "transparent"
    placeholder = "Enter Club Name"
    placeholderTextColor = "black"
    autoCapitalize = "none"
    />
    </View>
    <View> 
    <DropDown style = {styles.inputsfull}
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
        </View> 
<View style = {styles.heightselect} > 
    <TextInput style = {styles.inputsfull}
         mode='outlined'  
    label= "Enter Email Address"
    underlineColorAndroid = "transparent"
    placeholder = "Select Club"
    placeholderTextColor = "black"
    autoCapitalize = "none"
    >
   
      </TextInput>
      <List.Icon style = {styles.backicon} icon="calendar" />
     
    </View>  
    <View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>
 <TextInput style = {styles.inputcou}
      mode='outlined' 
           label= "+91"
               underlineColorAndroid = "transparent"
               placeholder = "91"
               placeholderTextColor = "black"
               autoCapitalize = "none"
              />

<TextInput style = {styles.inputpho}  
     mode='outlined'
           label= "9655210900"
               underlineColorAndroid = "transparent"
               placeholder = "987654566"
               placeholderTextColor = "black"
               autoCapitalize = "none"
              />
</View> 
<Text style= {{fontSize:14,color:"#000537",fontWeight:"bold",marginTop:20,marginBottom:10}}>Select Club Type *</Text>     
<View style={{ flexDirection:'row' ,alignItems: 'flex-start',flexWrap: 'wrap',}}>
  <Chip style={{ width:160, marginTop:10,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}} >Junior Coaching Club</Chip>
  <Chip   style={{ marginTop:10,marginLeft:10,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}} >Social club</Chip>
  <Chip  style={{ marginTop:10,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}}  >Adult Coaching Club </Chip>
  <Chip   style={{ marginTop:10,marginLeft:10,backgroundColor:"#fff",borderWidth:1,borderColor:"#ccc"}}  >Professional Club</Chip>



</View> 
<View style = {{ alignItems: 'center'}}> 
      <Button mode="contained" onPress={handleSubmit} style = {{  backgroundColor:'#CF3918',marginTop:30,justifyContent: 'center',color:"#fff",width:"100%",
    alignItems: 'center',marginBottom:40}} >Continue</Button>
   
</View></> )}
</Formik>
  </View>
   </ScrollView>   
  );
};

export default NewClub;
