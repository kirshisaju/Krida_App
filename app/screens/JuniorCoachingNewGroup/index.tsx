import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { ILoginState } from 'app/models/reducers/login';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
import BottomSheet from 'reanimated-bottom-sheet';
import JuniorCoachingAddMember from '../JuniorCoachingAddMember';
import JuniorCoachingAddCoaches from '../JuniorCoachingAddCoaches';





interface IState {
  loginReducer: ILoginState;
}

const renderContent = () => ( 
  <View
  style={{
    backgroundColor: 'white',
    padding: 16,
    height: 1000,
    width:"100%",
  }}
>
<JuniorCoachingAddMember/>
</View>
);
const renderContent1 = () => ( 
  <View
  style={{
    backgroundColor: 'white',
    padding: 16,
    height: 1000,
    width:"100%",
  }}
>
<JuniorCoachingAddCoaches/>
</View>
);
const JuniorCoachingNewGroup: React.FC = () => {
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
  const sheetRef1 = React.useRef(null);
  return (
    <ScrollView>
      <List.Item 
        titleStyle={{fontSize:17, fontWeight:'bold'}}
        descriptionStyle={{fontSize:14, fontWeight:'bold'}}
        title="Session for 12, Jul 2021"
        left={props =>  <List.Icon {...props} icon="chevron-left" />}/>
      <View style={{paddingHorizontal:15,paddingBottom:20}}>
      <View style = {{marginBottom:10,marginTop:20}} > 
        <TextInput 
          mode='outlined'  
          label= "Group Name"
          underlineColorAndroid = "transparent"
          placeholder = "Enter Group Name"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
      </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Schedule</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"70%", }}> 
          <Text style={{fontSize:14,paddingTop:13}}>Wednesdays, 06:00PM - 07:00PM</Text>
          </View>
          <View style={{width:"10%", }}> 
            <List.Icon color={Colors.red900} style={{paddingLeft:0,margin:0,}} icon="minus-circle-outline"  />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingLeft:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"89%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}}>Add Schedule</Text>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Members</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath2.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Ashoka</Text>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath1.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}} />
            <Text style={{fontSize:10,color:"#000537",paddingTop:10}}>Carasynthia</Text>
          </View>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath3.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}} />
            <Text style={{paddingLeft:18,fontSize:10,color:"#000537",paddingTop:10}}>Moff</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingLeft:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"89%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}}  onPress={() => sheetRef.current.snapTo(0)}>Add Members</Text>
          </View>
        </View>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Select the days</Text>
        <Text style={{fontSize:14, fontWeight:'bold',marginTop:20}}>Assign coaches</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:"20%", }}> 
            <Avatar.Image size={50} source={require('../../assets/NoPath5.png')} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:0,right:10}} />
            <Text style={{paddingLeft:10,fontSize:10,color:"#000537",paddingTop:10}}>Harold</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:5}}>
          <View style={{width:"11%", }}> 
            <List.Icon color={Colors.red900} style={{paddingLeft:0,margin:0,}} icon="plus-circle-outline"  />
          </View>
          <View style={{width:"89%", }}> 
            <Text style={{fontSize:10,color:"#CF3918",paddingTop:13}} onPress={() => sheetRef1.current.snapTo(0)} >Add Coaches</Text>
          </View>
        </View>
        <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:20,}}>Done</Button>
      </View>

  
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
   </ScrollView>   
   
  );
};

export default JuniorCoachingNewGroup;
