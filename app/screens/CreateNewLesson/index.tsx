import React from 'react';
import { Image, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Text, Button, List, Avatar, Title, Dialog, TextInput, Chip, Card, Badge, Paragraph, Colors, Searchbar, FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { ILoginState } from 'app/models/reducers/login';
import DropDown from 'react-native-paper-dropdown';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
import BottomSheet from 'reanimated-bottom-sheet';


interface IState {
  loginReducer: ILoginState;
}

const CreateNewLesson: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  const onClubsetup = () => NavigationService.navigate('Clubsetup');
  const onViewCourtBooking = () => NavigationService.navigate('ViewCourtBooking');
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [gender, setGender] = React.useState();


  const genderList = [
    { label: "Male", value: "male" },

    { label: "Female", value: "female" },

    { label: "Others", value: "others" },
  ];
  

  return (
    <ScrollView>

<List.Item 
        titleStyle={{fontSize:18,color:"#000537",fontWeight:'bold'}}
        title="Create Lesson"
        left={props =>  <List.Icon color={Colors.black} icon="close" />}  />
    <View style={{paddingHorizontal:15,paddingBottom:20}}>
      <View style={{marginTop:15}}> 
        <DropDown 
          label={"Select category"}
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
      <View style={{marginTop:15}}>
        <TextInput
          mode='outlined'  
          label= "Lesson Name"
          underlineColorAndroid = "transparent"
          placeholder = "Enter a lesson name"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
      </View> 
      <View style={{marginTop:15}}>
        <TextInput style={{height:100,paddingTop:0,marginTop:0}}
          mode='outlined'  
          label= "Description"
          underlineColorAndroid = "transparent"
          placeholder = "Enter a lesson description"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          >
        </TextInput>
      </View> 
      <View style={{marginTop:15}}>
        <Text style={{borderStyle:"dashed",borderWidth:1,borderColor:'#ccc',textAlign:'center',paddingVertical:40,fontSize:14,fontWeight:'bold'}}>
          <Image source={require('../../assets/image-gallery.png')} style={{marginHorizontal:10}}/>
        Add Photo & Video Library</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginVertical:20}}>
          <View style={{width:"33%", }}> 
            <Image source={require('../../assets/Image6.png')} style={{width:'90%'}}/>
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:-5,right:4}} />
          </View>
          <View style={{width:"33%", }}> 
            <Image source={require('../../assets/Image6.png')} style={{width:'90%'}}/>
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:-5,right:4}} />
          </View>
          <View style={{width:"33%", }}> 
            <Image source={require('../../assets/Image9.png')} style={{width:'100%'}} />
            <Image source={require('../../assets/TrailingIcon.png')} style={{position:'absolute',top:-5,right:-10,}} />
          </View>
        </View>
        <Button color={Colors.white}  style={{backgroundColor:'#CF3918',marginVertical:25,}}>Done</Button>
    </View>
         

   </ScrollView>   
   
  );
};

export default CreateNewLesson;
